import { useEffect, useRef, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';

const Rings = ({ position }) => {
    const refList = useRef([]);
    const getRef = useCallback((mesh) => {
        if (mesh && !refList.current.includes(mesh)) {
            refList.current.push(mesh);
        }
    }, []);

    // ✅ 添加 fallback 以防止 texture 加载失败影响 position
    const texture = useTexture('textures/rings.png', (tex) => {
        if (!tex) console.warn("Failed to load rings texture!");
    });

    useEffect(() => {
        console.log("Rings received position from index.js:", position);
    }, [position]);

    useGSAP(() => {
        if (refList.current.length === 0) return;

        gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
            .to(
                refList.current.map((r) => r.rotation),
                {
                    y: `+=${Math.PI * 2}`,
                    x: `-=${Math.PI * 2}`,
                    duration: 2.5,
                    stagger: { each: 0.15 },
                    ease: 'power1.inOut',
                }
            );
    });

    return (
        <group position={position} scale={0.4}>
            {Array.from({length: 4}, (_, index) => (
                <mesh key={index} ref={getRef}>
                    <torusGeometry args={[(index + 1) * 1.2, 0.2, 32, 100]}/>
                    <meshMatcapMaterial matcap={texture} toneMapped={false}/>
                </mesh>
            ))}
        </group>
    );
};

export default Rings;
