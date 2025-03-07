import React from 'react'
import {Canvas} from "@react-three/fiber";

const Experience = () => {
    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">My work Experience</h3>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas></Canvas>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
