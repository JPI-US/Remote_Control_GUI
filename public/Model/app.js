/**
 * 3D Tower Body Tracking - Main Application
 * 
 * This application creates a 3D visualization of a tower that automatically
 * tracks the sun as it orbits around. The tower can also be manually rotated
 * using arrow keys.
 * 
 * Features:
 * - 3D tower model loaded from GLTF file
 * - Animated sun that orbits around the tower
 * - Automatic tower rotation to face the sun
 * - Manual rotation controls with arrow keys
 * - Interactive camera controls (mouse drag, zoom)
 * - Realistic lighting and shadows
 * - Ground plane with vegetation
 */

// Import Three.js library and required modules
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// ============================================================================
// SCENE SETUP
// ============================================================================

// Create the main 3D scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // Sky blue background color

// ============================================================================
// CAMERA SETUP
// ============================================================================

// Create a perspective camera (mimics human vision)
// Parameters: field of view (degrees), aspect ratio, near plane, far plane
const camera = new THREE.PerspectiveCamera(
    75,                                    // Field of view angle
    window.innerWidth / window.innerHeight, // Aspect ratio (width/height)
    0.1,                                   // Near clipping plane
    1000                                   // Far clipping plane
);
// Position camera at an angle to view the tower
camera.position.set(50, 50, 50);
camera.lookAt(0, 0, 0); // Point camera at the origin

// ============================================================================
// RENDERER SETUP
// ============================================================================

// Create WebGL renderer with antialiasing for smoother edges
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Enable shadow rendering for realistic lighting
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadow edges

// Configure tone mapping for better color rendering
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2; // Brightness adjustment

// Add the renderer's canvas to the HTML page
const container = document.getElementById('canvas-container');
container.appendChild(renderer.domElement);

// ============================================================================
// LIGHTING SETUP
// ============================================================================

// Add ambient light for overall scene illumination (daylight feel)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

// Sun light will be created after the sun model loads
let sunLight = null;

// ============================================================================
// CAMERA CONTROLS
// ============================================================================

// OrbitControls allows user to rotate, pan, and zoom the camera with mouse
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;        // Smooth camera movement
controls.dampingFactor = 0.05;       // Damping strength
controls.minDistance = 10;            // Minimum zoom distance
controls.maxDistance = 200;           // Maximum zoom distance

// ============================================================================
// MODEL LOADER AND STATE VARIABLES
// ============================================================================

// GLTF loader for loading 3D models
const loader = new GLTFLoader();

// Scene objects
let towerModel = null;      // The main tower 3D model
let sunObject = null;        // The sun 3D model
let groundPlane = null;      // The ground plane mesh

// Tower properties
let towerHeight = 0;         // Height of the tower (calculated after loading)
let towerBounds = null;      // Bounding box of the tower

// Rotation control variables
let rotationSpeed = 0;                    // Current rotation speed (manual control)
const rotationDecay = 0.95;               // How quickly rotation slows down
const rotationAcceleration = 0.02;        // How quickly rotation speeds up

// Sun orbit variables
let sunAngle = 0;              // Current angle of sun in its circular orbit (radians)
const sunOrbitRadius = 120;    // Distance of sun from tower center
const sunOrbitSpeed = 0.005;   // Speed of sun's orbital movement

// Auto-tracking toggle
let autoTrackSun = true;       // Whether tower automatically tracks the sun

// UI element reference
const loadingElement = document.getElementById('loading');

// ============================================================================
// GROUND PLANE CREATION
// ============================================================================

/**
 * Creates a textured ground plane that looks like grass/earth.
 * Uses vertex colors to add natural color variation.
 * 
 * @returns {THREE.Mesh} The ground plane mesh
 */
function createGround() {
    const groundSize = 500; // Size of the ground plane
    
    // Create a plane geometry with many segments for smooth appearance
    const groundGeometry = new THREE.PlaneGeometry(groundSize, groundSize, 100, 100);
    
    // Create grass/earth material with realistic properties
    const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a7c59,  // Green grass color
        roughness: 0.9,   // High roughness (not shiny)
        metalness: 0.1,   // Low metalness (not metallic)
        side: THREE.DoubleSide // Render both sides of the plane
    });
    
    // Add color variation to vertices for a more natural grass appearance
    const colors = [];
    const positions = groundGeometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
        const color = new THREE.Color();
        // Vary between different green shades randomly
        const variation = Math.random() * 0.3;
        color.setRGB(
            0.2 + variation * 0.1,  // Red component (low for green)
            0.5 + variation * 0.2,  // Green component (high)
            0.3 + variation * 0.1   // Blue component (low for green)
        );
        colors.push(color.r, color.g, color.b);
    }
    // Apply vertex colors to the geometry
    groundGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    groundMaterial.vertexColors = true;
    
    // Create the ground mesh
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2; // Rotate to be horizontal (flat)
    ground.position.y = 0;
    ground.receiveShadow = true; // Ground receives shadows from other objects
    
    return ground;
}

// ============================================================================
// VEGETATION CREATION
// ============================================================================

/**
 * Creates a group of bushes/vegetation scattered around the ground.
 * Each bush is made of multiple sphere parts for a natural appearance.
 * 
 * @param {THREE.Mesh} groundPlane - The ground plane (for reference)
 * @param {number} count - Number of bushes to create (default: 40)
 * @returns {THREE.Group} Group containing all bushes
 */
function createBushes(groundPlane, count = 40) {
    const bushes = new THREE.Group();
    
    // Create each bush
    for (let i = 0; i < count; i++) {
        // Each bush is a group of multiple parts for natural look
        const bushGroup = new THREE.Group();
        
        // Main bush body - sphere shape for natural appearance
        const bushGeometry = new THREE.SphereGeometry(1.5 + Math.random() * 1.5, 8, 6);
        const bushMaterial = new THREE.MeshStandardMaterial({
            // Random green color variations using HSL color space
            color: new THREE.Color().setHSL(
                0.25 + Math.random() * 0.1,  // Green hue with variation
                0.6 + Math.random() * 0.3,   // Saturation variation
                0.2 + Math.random() * 0.15   // Lightness variation
            ),
            roughness: 0.9 // Not shiny
        });
        
        const mainBush = new THREE.Mesh(bushGeometry, bushMaterial);
        mainBush.position.y = 1.5 + Math.random() * 1; // Random height
        bushGroup.add(mainBush);
        
        // Add smaller parts to each bush for more variety
        for (let j = 0; j < 2 + Math.floor(Math.random() * 3); j++) {
            const part = new THREE.Mesh(
                new THREE.SphereGeometry(0.8 + Math.random() * 0.8, 6, 5),
                bushMaterial.clone()
            );
            // Random position relative to main bush
            part.position.set(
                (Math.random() - 0.5) * 2,
                Math.random() * 1.5,
                (Math.random() - 0.5) * 2
            );
            bushGroup.add(part);
        }
        
        // Position bush randomly on ground (circular distribution)
        // Avoid placing too close to tower center
        const angle = Math.random() * Math.PI * 2;        // Random angle
        const distance = 25 + Math.random() * 180;       // Distance from center
        bushGroup.position.x = Math.cos(angle) * distance;
        bushGroup.position.z = Math.sin(angle) * distance;
        bushGroup.position.y = 0; // On the ground
        
        // Random scale for size variation
        const scale = 0.6 + Math.random() * 1.2;
        bushGroup.scale.set(scale, scale, scale);
        
        // Random rotation for natural appearance
        bushGroup.rotation.y = Math.random() * Math.PI * 2;
        
        // Enable shadows for all bush parts
        bushGroup.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;      // Bush casts shadows
                child.receiveShadow = true;   // Bush receives shadows
            }
        });
        
        bushes.add(bushGroup);
    }
    
    return bushes;
}

// ============================================================================
// MATERIAL ENHANCEMENT
// ============================================================================

/**
 * Makes all materials in an object reflective and enables shadows.
 * This gives the tower a metallic, shiny appearance that reflects
 * the environment (sky, sun, etc.).
 * 
 * @param {THREE.Object3D} object - The 3D object to process
 */
function makeReflective(object) {
    // Traverse all children of the object (including nested objects)
    object.traverse((child) => {
        if (child.isMesh) {
            // Enable shadow casting and receiving
            child.castShadow = true;
            child.receiveShadow = true;
            
            if (child.material) {
                // Handle both single materials and material arrays
                const materials = Array.isArray(child.material) ? child.material : [child.material];
                
                materials.forEach((mat) => {
                    // Update existing standard/physical materials
                    if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
                        mat.metalness = 0.7;        // Make it metallic
                        mat.roughness = 0.3;         // Make it smooth/shiny
                        mat.envMapIntensity = 1.5;   // Strong environment reflections
                    } else if (mat instanceof THREE.MeshBasicMaterial) {
                        // Convert basic materials to standard materials for better lighting
                        const newMat = new THREE.MeshStandardMaterial({
                            color: mat.color,
                            map: mat.map,
                            metalness: 0.7,
                            roughness: 0.3,
                            envMapIntensity: 1.5
                        });
                        // Replace the material (handle both single and array cases)
                        child.material = Array.isArray(child.material) 
                            ? child.material.map(() => newMat)
                            : newMat;
                    }
                });
            }
        }
    });
}

// ============================================================================
// SUN MODEL LOADING
// ============================================================================

/**
 * Loads the sun 3D model and sets up lighting.
 * The sun will orbit around the tower and provide directional lighting.
 */
function loadSun() {
    loader.load(
        './sun.glb',
        // Success callback
        (gltf) => {
            sunObject = gltf.scene;
            
            // Calculate and apply appropriate scale for the sun
            const sunBox = new THREE.Box3().setFromObject(sunObject);
            const sunSize = sunBox.getSize(new THREE.Vector3());
            const maxSunDim = Math.max(sunSize.x, sunSize.y, sunSize.z);
            
            // Scale sun to be visible but not too large
            const sunScale = 15 / maxSunDim;
            sunObject.scale.set(sunScale, sunScale, sunScale);
            
            // Make sun glow by setting emissive properties
            sunObject.traverse((child) => {
                if (child.isMesh && child.material) {
                    const materials = Array.isArray(child.material) ? child.material : [child.material];
                    materials.forEach((mat) => {
                        if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
                            mat.emissive = new THREE.Color(0xffaa00); // Orange/yellow glow
                            mat.emissiveIntensity = 2.0; // Bright glow
                        }
                    });
                }
            });
            
            // Create directional light from sun (like sunlight)
            sunLight = new THREE.DirectionalLight(0xffaa00, 3.0); // Warm orange light
            sunLight.castShadow = true;
            
            // Configure shadow map for high-quality shadows
            sunLight.shadow.mapSize.width = 4096;
            sunLight.shadow.mapSize.height = 4096;
            sunLight.shadow.camera.near = 0.5;
            sunLight.shadow.camera.far = 500;
            sunLight.shadow.camera.left = -150;
            sunLight.shadow.camera.right = 150;
            sunLight.shadow.camera.top = 150;
            sunLight.shadow.camera.bottom = -150;
            sunLight.shadow.bias = -0.0001;      // Prevent shadow acne
            sunLight.shadow.normalBias = 0.02;   // Additional shadow bias
            sunLight.shadow.radius = 8;          // Soft shadow edges
            scene.add(sunLight);
            
            // Add point light at sun position for additional illumination
            const sunPointLight = new THREE.PointLight(0xffaa00, 1.5, 300);
            sunPointLight.position.set(0, 0, 0);
            sunObject.add(sunPointLight);
            
            // Position sun initially in its orbit
            if (towerModel && towerBounds) {
                const sunX = Math.cos(sunAngle) * sunOrbitRadius;
                const sunZ = Math.sin(sunAngle) * sunOrbitRadius;
                const sunY = towerHeight / 2 + 30; // Position at tower height level
                sunObject.position.set(sunX, sunY, sunZ);
                
                // Update light position to follow sun
                sunLight.position.copy(sunObject.position);
                sunLight.target.position.set(0, 0, 0); // Light points at tower center
            }
            
            scene.add(sunObject);
            
            // Update environment map after sun is added (for reflections)
            setTimeout(() => {
                updateEnvironmentMap();
            }, 100);
            
            console.log('Sun model loaded successfully');
        },
        // Progress callback
        (progress) => {
            console.log('Loading sun:', (progress.loaded / progress.total * 100).toFixed(0) + '%');
        },
        // Error callback
        (error) => {
            console.error('Error loading sun model:', error);
        }
    );
}

// ============================================================================
// SKY BACKGROUND
// ============================================================================

/**
 * Creates a gradient sky background that transitions from bright blue
 * at the top to a warmer color near the horizon (like a real sky).
 */
const skyGeometry = new THREE.SphereGeometry(400, 32, 32);
const skyMaterial = new THREE.ShaderMaterial({
    uniforms: {
        topColor: { value: new THREE.Color(0x87CEEB) },    // Sky blue at top
        bottomColor: { value: new THREE.Color(0xFFF8DC) }, // Warmer color near horizon
        offset: { value: 0.4 },                             // Gradient offset
        exponent: { value: 0.6 }                           // Gradient curve
    },
    // Vertex shader: passes world position to fragment shader
    vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    // Fragment shader: creates gradient based on vertical position
    fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
            float h = normalize(vWorldPosition).y;
            gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h + offset, 0.0), exponent), 0.0)), 1.0);
        }
    `,
    side: THREE.BackSide // Render inside of sphere (we're inside looking out)
});
const sky = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(sky);

// ============================================================================
// ENVIRONMENT MAP GENERATION
// ============================================================================

// PMREM generator for creating environment maps (for reflections)
let pmremGenerator = null;

/**
 * Generates an environment map from the current scene.
 * This map is used for realistic reflections on the tower and ground.
 */
function updateEnvironmentMap() {
    // Initialize PMREM generator if needed
    if (!pmremGenerator) {
        pmremGenerator = new THREE.PMREMGenerator(renderer);
        pmremGenerator.compileEquirectangularShader();
    }
    
    try {
        // Generate environment map from the scene
        const envMap = pmremGenerator.fromScene(scene, 0.04).texture;
        scene.environment = envMap;
        
        // Apply environment map to ground material for reflections
        if (groundPlane && groundPlane.material) {
            groundPlane.material.envMap = envMap;
            groundPlane.material.needsUpdate = true;
        }
        
        // Apply environment map to tower materials for reflections
        if (towerModel) {
            towerModel.traverse((child) => {
                if (child.isMesh && child.material) {
                    const materials = Array.isArray(child.material) ? child.material : [child.material];
                    materials.forEach((mat) => {
                        if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
                            mat.envMap = envMap;
                            mat.needsUpdate = true;
                        }
                    });
                }
            });
        }
    } catch (e) {
        console.warn('Could not generate environment map:', e);
    }
}

// ============================================================================
// GROUND PLANE INITIALIZATION
// ============================================================================

// Create ground plane (will be positioned after tower loads)
groundPlane = createGround();
scene.add(groundPlane);

// ============================================================================
// TOWER MODEL LOADING
// ============================================================================

/**
 * Loads the main tower 3D model and sets up the scene.
 * After loading, positions the tower, adds vegetation, and sets up the camera.
 */
loader.load(
    './5.6k_10x4_panels.gltf',
    // Success callback
    (gltf) => {
        towerModel = gltf.scene;
        
        // Calculate bounding box to center and position the model
        const box = new THREE.Box3().setFromObject(towerModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        towerBounds = box;
        
        // Store tower height for sun positioning
        towerHeight = size.y;
        
        // Center the model horizontally, but keep it on the ground
        towerModel.position.x = -center.x;
        towerModel.position.y = -center.y; // This positions bottom at y=0
        towerModel.position.z = -center.z;
        
        // Position ground plane at the bottom of the tower
        groundPlane.position.y = -center.y;
        
        // Create and add bushes/vegetation around the tower
        const bushes = createBushes(groundPlane, 40);
        bushes.position.y = -center.y; // Position at ground level
        scene.add(bushes);
        
        // Make tower materials reflective and enable shadows
        makeReflective(towerModel);
        
        scene.add(towerModel);
        
        // Update environment map after tower is added (for reflections)
        setTimeout(() => {
            updateEnvironmentMap();
        }, 100);
        
        // Load sun after tower is loaded
        loadSun();
        
        // Calculate appropriate camera distance to see both tower and sun
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180); // Convert to radians
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 2.2; // Add more padding to see sun in orbit
        camera.position.set(cameraZ, cameraZ * 0.6, cameraZ);
        camera.lookAt(0, towerHeight * 0.2, 0);
        controls.update();
        
        // Adjust controls to allow wider viewing (to see sun orbit)
        controls.maxDistance = 300;
        
        // Hide loading message
        loadingElement.style.display = 'none';
        
        console.log('Tower model loaded successfully');
    },
    // Progress callback
    (progress) => {
        const percent = (progress.loaded / progress.total * 100).toFixed(0);
        loadingElement.textContent = `Loading 3D Model... ${percent}%`;
    },
    // Error callback
    (error) => {
        console.error('Error loading model:', error);
        loadingElement.textContent = 'Error loading model. Check console for details.';
        loadingElement.style.color = '#ff4444';
    }
);

// ============================================================================
// KEYBOARD CONTROLS
// ============================================================================

// Track which keys are currently pressed
const keys = {
    ArrowLeft: false,
    ArrowRight: false
};

// Handle key press events
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        keys.ArrowLeft = true;
        event.preventDefault(); // Prevent browser scrolling
    } else if (event.key === 'ArrowRight') {
        keys.ArrowRight = true;
        event.preventDefault(); // Prevent browser scrolling
    } else if (event.key === ' ') {
        // Spacebar toggles automatic sun tracking
        autoTrackSun = !autoTrackSun;
        console.log('Auto-track sun:', autoTrackSun);
        event.preventDefault(); // Prevent page scrolling
    }
});

// Handle key release events
window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft') {
        keys.ArrowLeft = false;
    } else if (event.key === 'ArrowRight') {
        keys.ArrowRight = false;
    }
});

// ============================================================================
// ANIMATION LOOP
// ============================================================================

/**
 * Main animation loop that runs every frame.
 * Updates sun position, tower rotation, and renders the scene.
 */
function animate() {
    // Schedule next frame
    requestAnimationFrame(animate);
    
    // Update sun position in circular orbit around the tower
    if (sunObject && towerModel) {
        // Increment sun angle for orbital movement
        sunAngle += sunOrbitSpeed;
        
        // Calculate sun position in circular orbit around tower
        const sunX = Math.cos(sunAngle) * sunOrbitRadius;
        const sunZ = Math.sin(sunAngle) * sunOrbitRadius;
        const sunY = towerHeight / 2 + 30; // Keep sun at tower height level
        
        sunObject.position.set(sunX, sunY, sunZ);
        
        // Update sun light to follow sun position
        if (sunLight) {
            sunLight.position.copy(sunObject.position);
            sunLight.target.position.set(0, 0, 0); // Light points at tower center
            sunLight.target.updateMatrixWorld();
        }
        
        // Make tower automatically track the sun
        if (autoTrackSun && !keys.ArrowLeft && !keys.ArrowRight) {
            // Calculate angle from tower to sun (inverted to track correctly)
            const angleToSun = Math.atan2(sunX, sunZ) + Math.PI;
            // Smoothly rotate tower to face sun
            const targetRotation = angleToSun;
            const currentRotation = towerModel.rotation.y;
            
            // Normalize angles to -PI to PI range for smooth rotation
            let diff = targetRotation - currentRotation;
            if (diff > Math.PI) diff -= 2 * Math.PI;
            if (diff < -Math.PI) diff += 2 * Math.PI;
            
            // Smooth interpolation (5% per frame)
            towerModel.rotation.y += diff * 0.05;
        }
    }
    
    // Handle manual rotation based on arrow keys (overrides auto-tracking)
    if (towerModel) {
        if (keys.ArrowLeft) {
            // Rotate left (counter-clockwise)
            rotationSpeed += rotationAcceleration;
            autoTrackSun = false; // Disable auto-tracking when manually controlling
        } else if (keys.ArrowRight) {
            // Rotate right (clockwise)
            rotationSpeed -= rotationAcceleration;
            autoTrackSun = false; // Disable auto-tracking when manually controlling
        }
        
        // Apply manual rotation
        towerModel.rotation.y += rotationSpeed;
        
        // Decay rotation speed for smooth stop (momentum effect)
        rotationSpeed *= rotationDecay;
        
        // Stop very small rotations
        if (Math.abs(rotationSpeed) < 0.001) {
            rotationSpeed = 0;
            // Re-enable auto-tracking after manual control stops
            if (!keys.ArrowLeft && !keys.ArrowRight) {
                autoTrackSun = true;
            }
        }
    }
    
    // Update camera controls (for smooth damping)
    controls.update();
    
    // Render the scene
    renderer.render(scene, camera);
}

// ============================================================================
// WINDOW RESIZE HANDLER
// ============================================================================

/**
 * Handles window resize events to maintain proper aspect ratio.
 */
window.addEventListener('resize', () => {
    // Update camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    // Update renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============================================================================
// START APPLICATION
// ============================================================================

// Start the animation loop
animate();
