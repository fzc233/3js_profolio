import {Canvas} from "@react-three/fiber";
//import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import HW from "../components/HW.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Cube from "../components/Cube.jsx";
import Button from "../components/Button.jsx";
import HackerRoom2 from "../components/HackerRoom2.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth:400})
    const isTablet = useMediaQuery({minWidth:768,maxWidth:1024})
    const isMobile = useMediaQuery({ maxWidth:768 })
    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    console.log("Ring Position on Render:", sizes.ringPosition);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:sm-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi mate, I am
                    Conor
                    <span className="waving">🤖</span>
                </p>
                <p className="hero_tag text-gray_gradient">Welcome to Conor's Profolio</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/*<Leva/>*/}
                {/* use 3js*/}
                <Canvas className="w-full h-full" camera={{position: [0, 5, 10], fov: 50}}>
                    <Suspense fallback={<CanvasLoader/>}>
                        <ambientLight intensity={1.5}/>
                        <directionalLight position={[10, 10, 10]} intensity={1}/>
                        <HeroCamera>
                            <HackerRoom2 scale={sizes.deskScale} position={sizes.deskPosition}/>
                        </HeroCamera>
                        <group>
                            <Cube position={sizes.cubePosition}/>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Rings position={sizes.ringPosition}/> {/* ✅ 确保 Rings 真的被渲染 */}
                            <HW position={sizes.hwPosition}/>
                        </group>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}
export default Hero
