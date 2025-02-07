import {Canvas} from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import HW from "../components/HW.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth:400})
    const isTablet = useMediaQuery({minWidth:768,maxWidth:1024})
    const isMobile = useMediaQuery({ maxWidth:768 })
    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:sm-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi mate, I am Conor
                    <span className="waving">🤖</span>
                </p>
                <p className="hero_tag text-gray_gradient">Welcome to my Profolio</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/*<Leva/>*/}
            {/* use 3js*/}
                <Canvas className="w-full h-full" camera={{ position: [0, 5, 10], fov: 50 }} >

                    <Suspense fallback={<CanvasLoader/>}>
                        <ambientLight intensity={1.5}/>
                        <directionalLight position={[10,10,10]} intensity={1}/>
                        <HeroCamera>  <HackerRoom //scale={0.1}
                            scale={sizes.deskScale}
                            // rotation={[0,0,0]}
                            // position={[0,-4, 2]}
                            rotation={[0,0,0]}
                            position={sizes.deskPosition}/>
                        </HeroCamera>
                        <group>
                            <Rings position={sizes.ringPosition}/>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo  position={sizes.reactLogoPosition}/>
                            <HW position={sizes.hwPosition}/>
                        {/*    maybe more animation?*/}
                        </group>

                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
