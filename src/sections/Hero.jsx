import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:sm-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi mate, I am Conor
                    <span className="waving">🤖</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0">
            {/* use 3js*/}
                <Canvas className="w-full h-full" camera={{ position: [0, 5, 10], fov: 50 }} >

                    <Suspense fallback={<CanvasLoader/>}>
                        <ambientLight intensity={1.5}/>
                        <directionalLight position={[5, 5, 5]} intensity={2}/>
                        <HackerRoom scale={0.1} position={[0, -5, 0]}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
