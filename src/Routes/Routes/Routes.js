import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Pages/Login/Login";
import SignUp from "../../components/Pages/SignUp/SignUp";
import Main from "../../Layout/Main";
import Home from "../../components/Pages/Home/Home/Home";
import AllBikes from "../../components/Pages/Home/Home/Bikes/AllBikes/AllBikes";
import SingleBike from "../../components/Pages/Home/Home/Bikes/SingleBike/SingleBike";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allbikes',
                element: <AllBikes></AllBikes>
            },
            {
                path:'/bike/:id',
                element: <SingleBike></SingleBike>
            }



        ]
    }

])
export default router;