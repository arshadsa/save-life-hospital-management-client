import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Footer } from "./shared/Footer/Footer";
import Homepage from "./pages/Home Page/Homepage";
import Chat from "./components/Msngrchat/Chat";
import Speciality from "./pages/Speciality/Speciality";
import { NavigationBar } from "./shared/NavigationBar/NavigationBar";
import AddDoctor from "./pages/AddDoctor/AddDoctor";
import AllDoctors from "./pages/AllDoctors/AllDoctors";
import { Login } from "./pages/login/Login";
import AddDoctors from "./components/adddoctors/AddDoctors";
import { SignUp } from "./pages/SignUp/SignUp";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient()
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
      path: "/login",
      element: (
        <Login />
      )
    },
    {
      path: "/signup",
      element: (
        <SignUp />
      )
    },
    {
      path: "/makeAdmin",
      element: (
        <MakeAdmin />
      )
    }
  ]);

  return (

    <QueryClientProvider client={queryClient}>
      <div className="App bg-[#FFF]">
        <RouterProvider router={router} >
          <NavigationBar isHome={true} />

          <div className="mb-[150px]">
            {/* <Chat></Chat> */}
          </div>
          <Footer></Footer>
        </RouterProvider >
      </div>
    </QueryClientProvider>
  );
}

export default App;
