import About from "./Components/About";
import Features from "./Components/Features";
import Home from "./Components/Home";
import Tokenomics from "./Components/Tokenomics";


function App() {
  return (
    <div className="bg-cyan-dark">
      <Home/>
      <Features/>
      <About/>
      <Tokenomics/>
    </div>
  );
}

export default App;
