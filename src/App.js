import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./App.css";
import { Footer } from "./shared/Footer/Footer";
import Homepage from "./pages/Home Page/Homepage";
import Chat from "./components/Msngrchat/Chat";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Homepage></Homepage>
      ),
    },
    
    
  ]);
  return (
    <div className="App">
      
      <RouterProvider router={router} />
      <Footer></Footer>
      {/* <div className="mb-[150px]">
        <Chat></Chat>
      </div>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
