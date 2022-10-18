import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./shared/Footer/Footer";
import Homepage from "./pages/Home Page/Homepage";
import Chat from "./components/Msngrchat/Chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
      </Routes>

      <div className="mb-[150px]">
        <Chat></Chat>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
