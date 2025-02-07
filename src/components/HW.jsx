import { Float, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const HW = (props) => {
    const { nodes, materials } = useGLTF('/models/hello_world.glb');
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.3; // 控制前后旋转速度
        }
    });

    return (
        <Float floatIntensity={1}>
            <group
                ref={groupRef}
                rotation={[-Math.PI / 2, 0, 0]}
                {...props}
                position={[6, -3, 1]}
                scale={0.03}
            >
                <mesh
                    geometry={nodes.Object_2.geometry}
                    material={materials.color_16768282}
                />
                <mesh
                    geometry={nodes.Object_3.geometry}
                    material={materials.color_4634441}
                />
            </group>
        </Float>
    );
};

useGLTF.preload('/models/hello_world.glb');
export default HW;
