const About = () => {
    console.log("Rendering About component...");
    return (
        <section className="c-space my-20"  id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hello,I am Conor</p>
                            <p className="grid-subtext">Over 3 years of experience in web development, I have honed my
                                skills in frontend and backend development like ReactJS and .Net</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
