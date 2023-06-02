import React, {Suspense, useRef} from "react";
import './About.css';
import {
    Environment,
    Float,
    OrbitControls,
    PerspectiveCamera,
    Plane,
    Sphere,
    Stars,
    useAnimations,
    useTexture
} from "@react-three/drei";
import {Canvas, useLoader, useFrame} from "@react-three/fiber";
import {Physics, useBox, usePlane} from "@react-three/cannon";
import {useGLTF} from "@react-three/drei";
import {TextureLoader} from 'three/src/loaders/TextureLoader';


import * as THREE from 'three';
import {LinearEncoding} from "three";


function Model(props) {
    const group = useRef()
    const {nodes, materials, animations} = useGLTF('/assets/About/CitralFlo/mc_model-transformed.glb')
    const texture = useTexture('/assets/About/CitralFlo-texture.png')
    const [colorMap] = useTexture([
        '/assets/About/CitralFlo-texture.png',
    ])
    texture.magFilter=THREE.NearestFilter;
    materials.Char.map = texture;
    materials.Char.normalMap = texture;

    console.log(materials.Char.map);
    const {actions} = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.67}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Alex_18" position={[-0.01, 1, -0.03]} scale={0.62}>
                                <group name="GLTF_created_0">
                                    <mesh>

                                        <primitive object={nodes.GLTF_created_0_rootJoint}/>
                                        <skinnedMesh name="Object_7"
                                                     geometry={nodes.Object_7.geometry}
                                                     material={materials.Char}
                                                     skeleton={nodes.Object_7.skeleton}
                                        >
                                        </skinnedMesh>

                                    </mesh>
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

function Moon() {
    const moonTexture = useTexture({
        map: '/assets/About/moon_diff.jpg',
        displacementMap: '/assets/About/moon_disp.png',
        aoMap: '/assets/About/moon_arm.jpg',
        roughnessMap: '/assets/About/moon_arm.jpg',
        metalnessMap: '/assets/About/moon_arm.jpg',
        normalMap: '/assets/About/moon_normal.jpg',
    });


    return (
        <>
            <Plane args={[100, 100, 1280, 1280]} position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
                <meshStandardMaterial {...moonTexture}
                                      normalMap-encoding={LinearEncoding}
                                      displacementScale={10}
                />
            </Plane>

        </>
    );
}


export const About = () => {

    return (
        <div className="About">

            <div className="About-text">
                <h1 className="Title">About Me</h1>
                <p className='About-desc'>I'm a young developer in love with Minecraft.
                    It's a long way to go for me, but I want to learn everything to optimize life of others. </p>
            </div>
            <div className="About-3D">
                <Canvas dpr={[1, 2]} camera={{position: [0, 60, 80], fov: 80, near: 1}} className="3D-canvas">


                    <Stars/>
                    <ambientLight intensity={0.5}/>

                    <Physics>
                        <Float
                            speed={10} // Animation speed, defaults to 1
                            rotationIntensity={5} // XYZ rotation intensity, defaults to 1
                            floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                            floatingRange={[0, 5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                        >
                            <Model scale={10}/>
                        </Float>

                        <Moon scale={10}/>
                    </Physics>

                </Canvas>
            </div>
        </div>
    )
}

export default About;