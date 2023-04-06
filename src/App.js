import './App.css';
import Hero from './component/Hero/Hero';
import Plans from './component/Plans/Plans';
import Programs from './component/Programs/Programs';
import Reasons from './component/Reasons/Reasons';
import Testimonial from './component/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Programs></Programs>
          <Reasons></Reasons>
          <Plans></Plans>
          <Testimonial></Testimonial>
    </div>
  );
}

export default App;
