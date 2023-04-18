import React, {Suspense, useRef} from "react";
import './About.css';
import {Float, OrbitControls, Stars, useAnimations, useTexture} from "@react-three/drei";
import {Canvas, useLoader, useFrame} from "@react-three/fiber";
import {Physics, useBox, usePlane} from "@react-three/cannon";
import {useGLTF} from "@react-three/drei";
import {TextureLoader} from 'three/src/loaders/TextureLoader';
import dirt from './dirt.png';

function Model(props) {
    const group = useRef()
    const {nodes, materials, animations} = useGLTF('/assets/About/CitralFlo/mc_model-transformed.glb')
    const texture = useTexture('/assets/About/CitralFlo-texture.png')
    const {actions} = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.67}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Alex_18" position={[-0.01, 1.24, -0.03]} scale={0.62}>
                                <group name="GLTF_created_0">
                                    <primitive object={nodes.GLTF_created_0_rootJoint}/>

                                    <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry}
                                                 material={materials.Char} skeleton={nodes.Object_7.skeleton}/>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/assets/About/CitralFlo/mc_model-transformed.glb')


function Plane() {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0]}));
    const planeTexture = useLoader(TextureLoader, dirt);
    return (
        <mesh ref={ref}>
            <planeGeometry attach="geometry" args={[30, 30]}/>
            <meshLambertMaterial attach="material" map={planeTexture}/>
        </mesh>
    );
}

export const About = () => {
    return (
        <div className="About">
            <h1>About</h1>
            <p>This is the about page</p>
            <Canvas dpr={[1, 2]} camera={{position: [60, 20, 60], fov: 80, near: 0.001}}>
                <OrbitControls/>
                <Stars/>
                <ambientLight intensity={1}/>
                <spotLight position={[10, 15, 10]} angle={0.3}/>
                <Physics>
                    <Float
                        speed={10} // Animation speed, defaults to 1
                        rotationIntensity={5} // XYZ rotation intensity, defaults to 1
                        floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                        floatingRange={[1, 5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                        <Model scale={10}/>
                    </Float>
                    <Plane/>
                </Physics>
            </Canvas>
        </div>
    )
}

export default About;