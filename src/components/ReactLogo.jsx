import {Float, useGLTF} from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react_logo_circle.glb')

    return (
        <Float floatIntensity={1}>
            <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} {...props} position={[7,-2,0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.3}>
                    <mesh
                        geometry={nodes['React-Logo_Material002_0'].geometry}
                        material={materials['Material.002']}
                        position={[0, 7.935, 0]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[0.39,0.39,0.5]}
                    />

                </group>
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react_logo_circle.glb')
export default ReactLogo