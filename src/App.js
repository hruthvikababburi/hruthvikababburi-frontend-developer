import About from "./Components/About";
import Features from "./Components/Features";
import Home from "./Components/Home";
import Roadmap from "./Components/Roadmap";
import Tokenomics from "./Components/Tokenomics";


function App() {
  return (
    <div className="bg-cyan-dark">
      <Home/>
      <Features/>
      <About/>
      <Tokenomics/>
      <Roadmap/>
    </div>
  );
}

export default App;
