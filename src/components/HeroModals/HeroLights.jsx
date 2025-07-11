import { SpotLight } from '@react-three/drei';
import * as THREE from 'three';
import React from 'react';

function HeroLights(){
    return(

        <>
            {/* Lamp Light */}
            <spotLight
                position={[2,5,6]}
                angle={0.15}
                intensity={100}
                penumbra={0.2}
                color= "white"
            />

            <spotLight
                position={[4,5,4]}
                angle={0.3}
                intensity={40}
                penumbra={0.5}
                color= "#4cc950"
            />

            {/* purple side fill */}
            <spotLight
                position={[-3,5,5]}
                angle={0.4}
                intensity={60}
                penumbra={1}
                color= "#9d4edd"
            />

            {/* area light for soft moody fill */}
            <primitive
                object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)} 
                position = {[1,3,4]}
                intensity= {15}
                rotation= {[-Math.PI/4, Math.PI/4, 0]}
            />

            {/* subtle point light for atmospheric tone */}
            <pointLight 
                position={[0,1,0]}
                intensity={10}
                color="#7209b7"
            />

            <pointLight 
                position={[1,2,-2]}
                intensity={10}
                color="#0d00a4 "
            />
            
            {/* HeroLights

            <ambientLight intensity={0.2} color='#1a1a40' />
            <directionalLight position={[5,5,5]} intensity={2} />     */}
            
        </>
        
    );
}
export default HeroLights