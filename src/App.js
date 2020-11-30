import "./App.css";
import Nav from "./components/header/Nav";
import Projects from "./components/landing/Projects";
import Skills from "./components/landing/Skills";
import Welcome from "./components/landing/Welcome";
import WIP from "./components/landing/WIP";

function App() {
    return (
        <div className="App bg-gray-200">
            <Nav />
            <Welcome />
            <Skills />
            <Projects />
            <WIP />
        </div>
    );
}

export default App;
