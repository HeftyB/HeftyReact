import "./App.css";
import Nav from "./components/header/Nav";
import Projects from "./components/landing/Projects";
import Skills from "./components/landing/Skills";
import Welcome from "./components/landing/Welcome";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Welcome/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
