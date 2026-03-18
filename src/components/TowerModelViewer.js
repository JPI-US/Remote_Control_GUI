"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL_PATH = "/Model/5.6k_10x4_panels/";
const MODEL_FILE = "5.6k_10x4_panels.gltf";

export default function TowerModelViewer({
    angleDeg  = 0,
    className = "",
    width     = 280,
    height    = 280,
    bgColor   = "#0c0c0d",
    onError,
}) {
    const containerRef = useRef(null);
    const angleRef     = useRef(angleDeg);
    const mountedRef   = useRef(true);
    angleRef.current   = angleDeg;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        mountedRef.current = true;
        const container = containerRef.current;
        if (!container) return;

        let scene, camera, renderer, towerModel, animationId;

        function init() {
            try {
                scene = new THREE.Scene();
                scene.background = null;

                camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
                camera.position.set(0, 14, 44);
                camera.lookAt(0, 6, 0);

                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setSize(width, height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                renderer.setClearColor(0x000000, 0);
                renderer.shadowMap.enabled       = true;
                renderer.shadowMap.type          = THREE.PCFSoftShadowMap;
                renderer.toneMapping             = THREE.ACESFilmicToneMapping;
                renderer.toneMappingExposure     = 1.1;
                if (renderer.outputColorSpace !== undefined) {
                    renderer.outputColorSpace = THREE.SRGBColorSpace;
                }
                container.appendChild(renderer.domElement);

                // Lighting
                scene.add(new THREE.AmbientLight(0xffffff, 0.85));
                scene.add(new THREE.HemisphereLight(0x1a1a2e, 0x0c0c0d, 0.55));
                const fill = new THREE.PointLight(0xd4a853, 0.5, 60);
                fill.position.set(-10, 2, 10);
                scene.add(fill);
                const uplight = new THREE.PointLight(0xd4a853, 1.2, 55);
                uplight.position.set(0, -4, 22);
                scene.add(uplight);

                // Tower model
                const loader = new GLTFLoader();
                loader.setPath(MODEL_PATH);
                loader.load(
                    MODEL_FILE,
                    (gltf) => {
                        if (!mountedRef.current || !scene) return;
                        towerModel = gltf.scene;
                        const box    = new THREE.Box3().setFromObject(towerModel);
                        const center = box.getCenter(new THREE.Vector3());
                        const size_  = box.getSize(new THREE.Vector3());
                        const scale  = 18 / Math.max(size_.x, size_.y, size_.z);
                        towerModel.scale.setScalar(scale);
                        towerModel.position.x = -center.x * scale;
                        towerModel.position.y = -box.min.y * scale;
                        towerModel.position.z = -center.z * scale;
                        towerModel.traverse((child) => {
                            if (child.isMesh) {
                                child.castShadow    = true;
                                child.receiveShadow = true;
                                if (child.material) {
                                    const mats = Array.isArray(child.material)
                                        ? child.material : [child.material];
                                    mats.forEach((m) => {
                                        if (
                                            m instanceof THREE.MeshStandardMaterial ||
                                            m instanceof THREE.MeshPhysicalMaterial
                                        ) {
                                            m.metalness = 0.75;
                                            m.roughness = 0.25;
                                        }
                                    });
                                }
                            }
                        });
                        scene.add(towerModel);
                        addSunFromTower();
                        setLoading(false);
                    },
                    undefined,
                    (err) => {
                        console.error("Tower model load error:", err);
                        setLoading(false);
                        onError?.();
                    }
                );

                // Decorative "sun": reuse the already-loaded tower model (no extra network request).
                function addSunFromTower() {
                    if (!towerModel || !scene) return;
                    const sunObj = towerModel.clone(true);
                    sunObj.traverse((child) => {
                        if (child.isMesh && child.material) {
                            const ms = Array.isArray(child.material)
                                ? child.material : [child.material];
                            ms.forEach((m) => {
                                if (
                                    m instanceof THREE.MeshStandardMaterial ||
                                    m instanceof THREE.MeshPhysicalMaterial
                                ) {
                                    m.emissive          = new THREE.Color(0xffaa00);
                                    m.emissiveIntensity = 1.8;
                                }
                            });
                        }
                    });

                    // Small, glowing "sun" off to the side.
                    const [sx, sy, sz] = [18, 22, 14];
                    sunObj.scale.multiplyScalar(0.35);
                    sunObj.position.set(sx, sy, sz);
                    sunObj.rotation.y = Math.PI * 0.35;
                    scene.add(sunObj);

                    const dl = new THREE.DirectionalLight(0xffcc66, 2.2);
                    dl.position.set(sx, sy, sz);
                    dl.target.position.set(0, 10, 0);
                    dl.castShadow             = true;
                    dl.shadow.mapSize.width   = 2048;
                    dl.shadow.mapSize.height  = 2048;
                    dl.shadow.camera.left     = -25;
                    dl.shadow.camera.right    = 25;
                    dl.shadow.camera.top      = 25;
                    dl.shadow.camera.bottom   = -25;
                    scene.add(dl);

                    const pl = new THREE.PointLight(0xffaa00, 0.7, 50);
                    pl.position.set(sx, sy, sz);
                    scene.add(pl);
                }

                // Render loop — no fireflies, just tower rotation
                function animate() {
                    if (!mountedRef.current) return;
                    animationId = requestAnimationFrame(animate);
                    if (towerModel) {
                        const eff = Math.max(90, Math.min(270, angleRef.current));
                        towerModel.rotation.y = ((360 - eff) * Math.PI) / 180;
                    }
                    renderer.render(scene, camera);
                }
                animate();

            } catch (e) {
                console.error("TowerModelViewer init error:", e);
                setLoading(false);
            }
        }

        init();

        return () => {
            mountedRef.current = false;
            if (animationId) cancelAnimationFrame(animationId);
            if (renderer && container &&
                renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
            renderer?.dispose();
        };
    }, [width, height]);

    return (
        <div className={className} style={{
            width, height, minWidth: width, minHeight: height,
            position: "relative", background: "transparent",
            borderRadius: 10, overflow: "hidden",
        }}>
            <div ref={containerRef}
                style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} />
            {loading && (
                <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.7rem", color: "rgba(255,255,255,0.2)",
                    pointerEvents: "none",
                }}>Loading…</div>
            )}
        </div>
    );
}