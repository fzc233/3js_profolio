import {myProjects} from "../constants/index.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoCoumputer from "../components/DemoCoumputer.jsx";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const curProjects = myProjects[selectedProjectIndex];
    const projectCount = myProjects.length;
    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex)=> {
            if (direction === 'previous'){
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            }else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    }

    console.log(curProjects);
    return (
        <section className="c-space my-20">
            <p className="head-text">My projects</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={myProjects[0].spotlight} alt="spotlight"ho
                             className="w-full h-96 object-cover rounded-xl"/>
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                         style={curProjects.logoStyle}>
                        <img src={curProjects.logo} alt="logo" className="w-10 h-10 shadow-sm"/>
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{curProjects.title}</p>
                        <p className="animatedText">{curProjects.desc}</p>
                        <p className="animatedText">{curProjects.subdesc}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {curProjects.tags.map((tag, index) => (
                                    <div key={index} className="tech-logo">
                                        <img src={tag.path} alt={tag.name}/>
                                    </div>
                                ))}
                            </div>
                            <a className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-500"
                               href={curProjects.href}
                               target="_blank"
                               rel="noreferrer">
                                <p className="hover:underline hover:text-blue-500 transition duration-300 ease-in-out">
                                    Check live Site
                                </p>
                                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3"/>
                            </a>
                        </div>
                        <div className="flex items-center justify-between  mt7">
                            <button className="arrow-btn bg-white/10 text-white px-4 py-2 rounded-lg
                   backdrop-blur-md hover:bg-white/20 hover:shadow-lg transition-all duration-300" onClick={() => handleNavigation('previous')}>
                                <img src="/assets/left-arrow.png" alt="arrow" className="w-4 h-4"/>
                            </button>
                            <button className="arrow-btn bg-white/10 text-white px-4 py-2 rounded-lg
                   backdrop-blur-md hover:bg-white/20 hover:shadow-lg transition-all duration-300" onClick={() => handleNavigation('next')}>
                                <img src="/assets/right-arrow.png" alt="arrow" className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                </div>
                    <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                        <Canvas>
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 5]} intensity={1} />
                            <Center>
                                <Suspense fallback={<CanvasLoader />}>
                                    <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                        <DemoCoumputer texture={curProjects.texture} />
                                    </group>
                                </Suspense>
                            </Center>
                            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={true}/>
                        </Canvas>
                    </div>
            </div>
        </section>
    )
}
export default Projects
