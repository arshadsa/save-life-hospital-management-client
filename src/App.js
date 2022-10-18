import './App.css';
import { Footer } from './shared/Footer/Footer';
import AvailableFeatures from './components/Home components/AvailableFeatures/AvailableFeatures';
import Doctor from './components/Home components/Book Our Doctors/Doctor';
import Specialties from './components/Home components/Specialties/Specialties';
import { Use } from './components/Home components/use/Use';
import Homepage from './pages/Home Page/Homepage';
import Chat from './components/Msngrchat/Chat';



function App() {

  return (
    <div className="App">
      <Homepage></Homepage>
      <AvailableFeatures></AvailableFeatures>
      <Specialties></Specialties>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Use></Use>
      <Doctor></Doctor>
      <div className='mb-[150px]'>
        <Chat></Chat>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
