import './App.css';
import Hero from './component/Hero/Hero';
import Plans from './component/Plans/Plans';
import Programs from './component/Programs/Programs';
import Reasons from './component/Reasons/Reasons';
function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Programs></Programs>
          <Reasons></Reasons>
          <Plans></Plans>
    </div>
  );
}

export default App;
