import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner.js'
import Services_Section from './Components/Services_Section/Services_Section.js';
import Portfolio_Section from './Components/Sections/Portfolio_Section/Portfolio_Section.js';

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Services_Section/>
        <Portfolio_Section/>
    </div>
  );
}

export default App;
