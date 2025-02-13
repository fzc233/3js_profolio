import {Navbar} from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

const App = () => {
    console.log("Rendering About component...");
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
        </main>
    );
};

export default App;