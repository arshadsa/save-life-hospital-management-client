import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Footer } from "./shared/Footer/Footer";
import Homepage from "./pages/Home Page/Homepage";
import Chat from "./components/Msngrchat/Chat";
import Speciality from "./pages/Speciality/Speciality";
import { NavigationBar } from "./shared/NavigationBar/NavigationBar";
import AddDoctor from "./pages/AddDoctor/AddDoctor";
import AllDoctors from "./pages/AllDoctors/AllDoctors";
import AddDoctors from "./components/adddoctors/AddDoctors";
import Pharmacy from "./components/Home components/What are u looking fr/Pharmacy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Homepage></Homepage>
      ),
    },

    {
      path: "/adddoctors",
      element: (
       <AddDoctors></AddDoctors>
      ),
    },

    {
      path: "/doctor",
      element: (
        <Speciality></Speciality>
      ),
    },

    {
      path: "/doctor/add",
      element: (
        <AddDoctor></AddDoctor>
      ),
    },

    {
      path: "/doctor/all",
      element: (
        <AllDoctors></AllDoctors>
      ),
    },

    {
      path: "/doctor/:id",
      element: (
        <AllDoctors></AllDoctors>
      ),
    },
    {
      path: "/pharmacy",
      element: (
        <Pharmacy></Pharmacy>
      ),
    }
  ]);

  return (
    <div className="App">
      <NavigationBar isHome={true} />
      <RouterProvider router={router} />
      <div className="mb-[150px]">
        <Chat></Chat>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
