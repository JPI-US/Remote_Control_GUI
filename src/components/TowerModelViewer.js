"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL_PATH = "/Model/";
const MODEL_FILE = "5.6k_10x4_panels.gltf";
const SUN_FILE = "sun.glb";

export default function TowerModelViewer({ angleDeg = 0, className = "", width = 280, height = 280, bgColor = "#e8e8e8" }) {
    const containerRef = useRef(null);
    const angleRef = useRef(angleDeg);
    const mountedRef = useRef(true);
    angleRef.current = angleDeg;

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        mountedRef.current = true;
        const container = containerRef.current;
        if (!container) return;

        let scene, camera, renderer, towerModel, sunLight, animationId;

        function init() {
            try {
                scene = new THREE.Scene();
                scene.background = new THREE.Color(bgColor);

                camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
                camera.position.set(0, 14, 44);
                camera.lookAt(0, 4, 0);

                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
                renderer.setSize(width, height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
                renderer.shadowMap.enabled = true;
                renderer.shadowMap.type = THREE.PCFSoftShadowMap;
                renderer.toneMapping = THREE.ACESFilmicToneMapping;
                renderer.toneMappingExposure = 1.2;
                if (renderer.outputColorSpace !== undefined) {
                    renderer.outputColorSpace = THREE.SRGBColorSpace;
                }
                container.appendChild(renderer.domElement);

                const ambient = new THREE.AmbientLight(0xffffff, 0.4);
                scene.add(ambient);

                const loader = new GLTFLoader();
                loader.setPath(MODEL_PATH);
                loader.load(
                    MODEL_FILE,
                    (gltf) => {
                        if (!mountedRef.current || !scene) return;
                        towerModel = gltf.scene;
                        const box = new THREE.Box3().setFromObject(towerModel);
                        const center = box.getCenter(new THREE.Vector3());
                        const size = box.getSize(new THREE.Vector3());
                        const maxDim = Math.max(size.x, size.y, size.z);
                        const scale = 18 / maxDim;
                        towerModel.scale.setScalar(scale);
                        towerModel.position.x = -center.x * scale;
                        towerModel.position.y = -box.min.y * scale;
                        towerModel.position.z = -center.z * scale;
                        towerModel.traverse((child) => {
                            if (child.isMesh) {
                                child.castShadow = true;
                                child.receiveShadow = true;
                                if (child.material) {
                                    const materials = Array.isArray(child.material) ? child.material : [child.material];
                                    materials.forEach((mat) => {
                                        if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
                                            mat.metalness = 0.7;
                                            mat.roughness = 0.3;
                                        }
                                    });
                                }
                            }
                        });
                        scene.add(towerModel);
                        const poleHeight = 6;
                        const poleRadius = 0.8;
                        const poleGeom = new THREE.CylinderGeometry(poleRadius, poleRadius * 1.2, poleHeight, 16);
                        const poleMat = new THREE.MeshStandardMaterial({
                            color: 0xffffff,
                            metalness: 0.5,
                            roughness: 0.4,
                        });
                        const pole = new THREE.Mesh(poleGeom, poleMat);
                        pole.position.y = -poleHeight / 2;
                        pole.castShadow = true;
                        pole.receiveShadow = true;
                        scene.add(pole);
                        loadSun();
                        setLoading(false);
                        setError(null);
                    },
                    (progress) => {
                        if (progress.total > 0 && progress.loaded === progress.total) {
                            setLoading(false);
                        }
                    },
                    (err) => {
                        console.error("Tower model load error:", err);
                        setError(err?.message || "Failed to load model");
                        setLoading(false);
                    }
                );

                function loadSun() {
                    loader.load(
                        SUN_FILE,
                        (gltf) => {
                            if (!mountedRef.current || !scene) return;
                            const sunObject = gltf.scene;
                            const sunBox = new THREE.Box3().setFromObject(sunObject);
                            const sunSize = sunBox.getSize(new THREE.Vector3());
                            const maxSunDim = Math.max(sunSize.x, sunSize.y, sunSize.z);
                            const sunScale = 8 / maxSunDim;
                            sunObject.scale.set(sunScale, sunScale, sunScale);
                            sunObject.traverse((child) => {
                                if (child.isMesh && child.material) {
                                    const materials = Array.isArray(child.material) ? child.material : [child.material];
                                    materials.forEach((mat) => {
                                        if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
                                            mat.emissive = new THREE.Color(0xffaa00);
                                            mat.emissiveIntensity = 2.0;
                                        }
                                    });
                                }
                            });
                            const sunX = 18;
                            const sunY = 22;
                            const sunZ = 14;
                            sunObject.position.set(sunX, sunY, sunZ);
                            scene.add(sunObject);
                            sunLight = new THREE.DirectionalLight(0xffcc66, 2.2);
                            sunLight.position.set(sunX, sunY, sunZ);
                            sunLight.target.position.set(0, 10, 0);
                            sunLight.castShadow = true;
                            sunLight.shadow.mapSize.width = 4096;
                            sunLight.shadow.mapSize.height = 4096;
                            sunLight.shadow.radius = 4;
                            sunLight.shadow.camera.near = 0.5;
                            sunLight.shadow.camera.far = 80;
                            sunLight.shadow.camera.left = -25;
                            sunLight.shadow.camera.right = 25;
                            sunLight.shadow.camera.top = 25;
                            sunLight.shadow.camera.bottom = -25;
                            scene.add(sunLight);
                            const sunPointLight = new THREE.PointLight(0xffaa00, 0.8, 50);
                            sunPointLight.position.set(sunX, sunY, sunZ);
                            scene.add(sunPointLight);
                        },
                        undefined,
                        (err) => console.warn("Sun model load failed:", err)
                    );
                }

                function animate() {
                    if (!mountedRef.current) return;
                    animationId = requestAnimationFrame(animate);
                    if (towerModel) {
                        const effectiveAngle = Math.max(90, Math.min(270, angleRef.current));
                        const modelAngle = 360 - effectiveAngle;
                        towerModel.rotation.y = (modelAngle * Math.PI) / 180;
                    }
                    if (renderer && scene && camera) {
                        renderer.render(scene, camera);
                    }
                }
                animate();
            } catch (e) {
                console.error("TowerModelViewer init error:", e);
                setError(e?.message || "Failed to init 3D viewer");
                setLoading(false);
            }
        }

        init();

        return () => {
            mountedRef.current = false;
            if (animationId) cancelAnimationFrame(animationId);
            if (renderer && container && renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
            renderer?.dispose();
        };
    }, [width, height]);

    return (
        <div
            className={className}
            style={{
                width,
                height,
                minWidth: width,
                minHeight: height,
                position: "relative",
                background: bgColor,
            }}
        >
            <div
                ref={containerRef}
                style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
            />
            {loading && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.875rem",
                        color: "#6A7B8F",
                        pointerEvents: "none",
                    }}
                >
                    Loading 3D model…
                </div>
            )}
            {error && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.875rem",
                        color: "#b91c1c",
                        padding: 8,
                        textAlign: "center",
                    }}
                >
                    {error}
                </div>
            )}
        </div>
    );
}
