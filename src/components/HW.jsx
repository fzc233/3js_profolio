import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const HW = (props) => {
    const { nodes, materials } = useGLTF('/models/hello_world.glb');
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3; // 调整旋转方向 (y 轴旋转更自然)
        }
    });

    return (
        <group
            ref={groupRef}
            rotation={[-Math.PI / 2, 0, 0]}
            position={props.position} // ✅ 让外部传进来的 position 生效
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
    );
};

useGLTF.preload('/models/hello_world.glb');
export default HW;
