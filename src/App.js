import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner.js'
import Services_Section from './Components/Services_Section/Services_Section.js';
import Portfolio_Section from './Components/Sections/Portfolio_Section/Portfolio_Section.js';
import ProductionStep_Section from './Components/Sections/ProductionSteps_Section/ProductionStep_Section.js';
import Depoiments_Section from './Components/Sections/Depoiments_Section/Depoiments.js';
import AboutMe_Section from './Components/Sections/AboutMe_Section/AboutMe_Section.js';
import Footer from './Components/Footer/Footer.js';
import Accordion_Fac from './Components/FAC_Accordion/Accordion_Fac.js';

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Services_Section/>
        <Portfolio_Section/>
        <ProductionStep_Section/>
        <Depoiments_Section/>
        <AboutMe_Section/>
        <Accordion_Fac/>
        <Footer/>
    </div>
  );
}

export default App;
