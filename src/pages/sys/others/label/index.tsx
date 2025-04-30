import Card from "@/components/card";
import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.176.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.176.0/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";
import "./index.scss";
export default function BlankPage() {
    const containerRef = useRef(null);
    const sceneRef = useRef();
    const cameraRef = useRef();
    const rendererRef = useRef();
    const controlsRef = useRef();
    const mixerRef = useRef();
    const modelRef = useRef();

    const animationIdRef = useRef(); // 用于记录动画渲染器的ID，便于清理重置

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // 初始化场景
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);
        // 添加环境光
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        // // 添加平行光
        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.6);
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
        const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.6);
        const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight1.position.set(-50, 50, 100);
        directionalLight2.position.set(50, 50, 100);
        directionalLight3.position.set(-50, 50, -100);
        directionalLight4.position.set(50, 50, -100);
        scene.add(directionalLight1, directionalLight2, directionalLight3, directionalLight4);

        // 添加半球光
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 0.7);
        hemiLight.position.set(0, 10, 0);
        scene.add(hemiLight);

        sceneRef.current = scene;

        // 初始化相机
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 0, 7);
        camera.lookAt(0, 0, 0);
        cameraRef.current = camera;

        // 创建渲染器并绑定到容器
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.toneMappingExposure = 1.2;
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // 加载模型
        const loader = new GLTFLoader();
        loader.load(
            "src/assets/RabbitWithCarrot.glb",
            (gltf) => {
                const model = gltf.scene;
                model.position.set(0, 0, 0);
                model.scale.set(20, 20, 20);
                scene.add(model);
                camera.lookAt(model.position);
                setActionConfig(model, gltf.animations);
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center);
                modelRef.current = model;
            },
            undefined,
            (error) => {
                console.error("模型加载失败：", error);
            }
        );

        // 添加轨道控制器
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controlsRef.current = controls;

        // 动画循环
        const clock = new THREE.Clock();
        const setActionConfig = (model, animations) => {
            const mixer = new THREE.AnimationMixer(model);
            for (let i = 0; i < animations.length; i++) {
                const clip = animations[i];
                const action = mixer.clipAction(clip);
                action.play();
            }
            mixerRef.current = mixer;
        };

        const animate = () => {
            animationIdRef.current = requestAnimationFrame(animate);

            if (mixerRef.current) {
                const delta = clock.getDelta();
                mixerRef.current.update(delta);
            }

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // 监听窗口大小变化
        const handleResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener("resize", handleResize);

        // 清理资源
        return () => {
            // 终止动画循环
            cancelAnimationFrame(animationIdRef.current);
            // 彻底清理动画混合器
            if (mixerRef.current) {
                const model = modelRef.current;
                mixerRef.current.stopAllAction();
                if (model) {
                    mixerRef.current.uncacheRoot(model);
                }
                mixerRef.current = null;
            }
            container.removeChild(renderer.domElement);
            window.removeEventListener("resize", handleResize);
            scene.clear();
            renderer.dispose();
            controls.dispose();
        };
    }, []);

    return (
        <Card>
            <div ref={containerRef} className="canvasContainer"></div>
        </Card>
    );
}
