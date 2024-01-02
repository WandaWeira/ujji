import About from "./Components/About";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="absolute w-screen">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <div className="absolute">
          <Main />
        </div>
        <div className="relative">
          <About />
        </div>
      </div>
      <div className="flex flex-col relative bg-white">
        <Overview />
        <Projects />
      </div>
    </div>
  );
}

export default App;
