// import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <ProjectsList />
      <Contact />
    </div>
  );
}

export default App;
