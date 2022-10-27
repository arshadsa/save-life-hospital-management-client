import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "./shared/Footer/Footer";
import Chat from "./components/Msngrchat/Chat";
import { NavigationBar } from "./shared/NavigationBar/NavigationBar";
import AddDoctors from "./components/adddoctors/AddDoctors";
import Details from "./components/details/Details";
import Pharmacy from "./components/Home components/What are u looking fr/Pharmacy";
import { QueryClient, QueryClientProvider } from "react-query";
import ZOOM from "./pages/ZOOM/ZOOM";
import Phercheckout from "./components/Pharheckout/Phercheckout";
import Appointment from "./components/appointment/Appointment";
import AddNews from "./components/addnews/AddNews";
import News from "./components/news/News";
import NewsDetails from "./components/newsdetails/NewsDetails";
import EditDoctor from "./pages/EditDoctor/EditDoctor";
import { lazy, Suspense } from "react";
const queryClient = new QueryClient();
const Homepage = lazy(() => import("./pages/Home Page/Homepage"));
const AddDoctor = lazy(() => import("./pages/AddDoctor/AddDoctor"));
const AllDoctors = lazy(() => import("./pages/AllDoctors/AllDoctors"));
const Speciality = lazy(() => import("./pages/Speciality/Speciality"));
const BloodDoner = lazy(() => import("./pages/BloodDoner/BloodDoner"));
const Login = lazy(() => import("./pages/login/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const MakeAdmin = lazy(() => import("./pages/Dashboard/MakeAdmin"));
const BloodDonerList = lazy(() => import("./pages/BloodDonerList/BloodDonerList"));
const BloodBank = lazy(() => import("./pages/BloodBank/BloodBank"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute/ProtectedRoute"));
const SpecialistDoctors = lazy(() => import("./pages/SpecialistDoctors/SpecialistDoctors"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage></Homepage>,
    },

    {
      path: "/adddoctors",
      element: (
        <AddDoctors></AddDoctors>
      ),
    },

    {
      path: "/doctor",
      element: <Speciality></Speciality>,
    },

    {
      path: "/doctor/add",
      element: <AddDoctor></AddDoctor>,
    },

    {
      path: "/doctor/edit/:id",
      element: <EditDoctor/>,
    },

    {
      path: "/doctors/all",
      element: <AllDoctors></AllDoctors>,
    },

    {
      path: "/doctor/:id",
      element: <Details></Details>,
    },

    {
      path: "/doctor/:id",
      element: <Details></Details>,
    },

    {
      path: "/doctors/:speciality",
      element: <SpecialistDoctors></SpecialistDoctors>,
    },

    {
      path: "/login",
      element: (
        <Login />
      )
    },
    {
      path: "/websitedoctors/:id",
      element: (
        <Details></Details>
      ),
    },
    {
      path: "/news/:id",
      element: (
        <NewsDetails></NewsDetails>
      ),
    },
    {
      path: "/websitedoctors/:id",
      element: (
        <Details></Details>
      ),
    },

    {
      path: "*",
      element: (
        <div>This Route not found</div>
      )
    },
    {
      path: "/pharmacy",
      element: (
        <Pharmacy></Pharmacy>
      )
    },
    {
      path: "/signup",
      element: (<SignUp />),
    },
    {
      path: "/makeAdmin",
      element: (
        <MakeAdmin />
      )
    },
    {
      path: "/bloodDoner",
      element: (
        <ProtectedRoute>
          <BloodDoner />
        </ProtectedRoute>
      )
    },
    {
      path: "/bloodDonerList",
      element: (
        <BloodDonerList />
      )
    },
    {
      path: "/bloodBank",
      element: (
        <BloodBank />
      )
    },
    {
      path: "/websitedoctors/:id",
      element: <Details></Details>,
    },
    {
      path: "/appointment",
      element: (
        <Appointment></Appointment>
      )
    },
    {
      path: "/addnews",
      element: (
        <AddNews></AddNews>
      )
    },
    {
      path: "/news",
      element: (
        <News></News>
      )
    },
    {
      path: "/medcheckout/:id",
      element: (<Phercheckout></Phercheckout>)
    },

    {
      path: "/medcheckout/:id",
      element: <Phercheckout></Phercheckout>
    },
    {
      path: "/medcheckout/:id",
      element: (<Phercheckout></Phercheckout>)
    },

    // {
    //   path: "/medcheckout/:id",
    //   element: <Phercheckout></Phercheckout>
    // },
  ]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <RouterProvider router={router} />
          {/* <NavigationBar isHome={true} /> */}
          <div className="mb-[150px]">
            <Chat></Chat>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
