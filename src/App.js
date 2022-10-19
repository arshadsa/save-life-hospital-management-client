import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./shared/Footer/Footer";
import Homepage from "./pages/Home Page/Homepage";
import Chat from "./components/Msngrchat/Chat";
import Speciality from "./pages/Speciality/Speciality";
import { NavigationBar } from "./shared/NavigationBar/NavigationBar";
import AddDoctor from "./pages/AddDoctor/AddDoctor";
import AllDoctors from "./pages/AllDoctors/AllDoctors";

function App() {
  return (
    <div className="App">
      <NavigationBar isHome={true} />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/doctor" element={<Speciality></Speciality>}></Route>
        <Route path="/doctor/add" element={<AddDoctor></AddDoctor>}></Route>
        <Route path="/doctor/all" element={<AllDoctors></AllDoctors>}></Route>
      </Routes>

      <div className="mb-[150px]">
        <Chat></Chat>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
