import About from "./Components/About";
import FAQs from "./Components/FAQs";
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
      <FAQs/>
    </div>
  );
}

export default App;
