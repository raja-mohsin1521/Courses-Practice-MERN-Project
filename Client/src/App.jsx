
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
function App() {
  const router = createBrowserRouter([
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>,
    },
    {
      path: "/",
      element: <><Navbar/><Home/></>,
    },
    {
      path: "/signup",
      element: <><Navbar/><Signup/></>,
    },
   
  ]);

  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App
