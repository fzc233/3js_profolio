import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
    );

    useGSAP(() => {
        if (targetRef.current) {
            const initialY = targetRef.current.position.y; // 记录原始Y轴位置
            gsap.to(targetRef.current.position, {
                y: initialY + 0.5, // 让它在固定范围内浮动
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    });

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={2}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Target;
