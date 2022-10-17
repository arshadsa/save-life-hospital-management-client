import './App.css';
import AvailableFeatures from './components/Home components/AvailableFeatures/AvailableFeatures';
import Specialties from './components/Home components/Specialties/Specialties';
import Homepage from './pages/Home Page/Homepage';


function App() {

  return (
    <div className="App">
      <Homepage></Homepage>
      <AvailableFeatures></AvailableFeatures>
      <Specialties></Specialties>
    </div>
  );
}

export default App;
