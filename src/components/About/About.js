import React from "react";
import './About.css';
import {OrbitControls, Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Physics, useBox, usePlane} from "@react-three/cannon";

function Box() {
    const [ref, api] = useBox(() => ({mass: 1, position: [0, 5, 0]}));
    return (
        <mesh onClick={() => {
            api.velocity.set(0, 2, 0);
        }
        } ref={ref}>
            <boxBufferGeometry attach="geometry"/>
            <meshStandardMaterial attach="material" color="hotpink"/>
        </mesh>
    );
}

function Plane() {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0]}) );
    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach="geometry" args={[30, 30]}/>
            <meshLambertMaterial attach="material" color="lightblue"/>
        </mesh>
    );
}

export const About = () => {
    return (
        <div className="About">
            <h1>About</h1>
            <p>This is the about page</p>
            <Canvas>

                <OrbitControls/>
                <Stars/>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 15, 10]} angle={0.3}/>
                <Physics>
                    <Plane/>
                    <Box/>
                </Physics>
            </Canvas>
        </div>
    )
}

export default About;