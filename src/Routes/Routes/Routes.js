import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Pages/Login/Login";
import SignUp from "../../components/Pages/SignUp/SignUp";
import Main from "../../Layout/Main";
import Home from "../../components/Pages/Home/Home/Home";


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
            }



        ]
    }

])
export default router;