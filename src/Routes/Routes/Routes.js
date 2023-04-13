import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Pages/Login/Login";
import SignUp from "../../components/Pages/SignUp/SignUp";
import Main from "../../Layout/Main";
import Home from "../../components/Pages/Home/Home/Home";
import AllBikes from "../../components/Pages/Home/Home/Bikes/AllBikes/AllBikes";
import SingleBike from "../../components/Pages/Home/Home/Bikes/SingleBike/SingleBike";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddItem from "../../components/Pages/Login/AddItem/AddItems";
import ManageItems from "../../components/Pages/ManageItems/ManageItems";
import NotFound from "../../components/Pages/NotFound/NotFound";


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
                path: '/bike/:id',
                element: <SingleBike />,
                loader: async ({ params }) => {
                    const response = await fetch(`https://motorbike-inventory-server.vercel.app/bike/${params.id}`);
                    const data = await response.json();
                    return { bike: data };
                },
            },
            {
                path: '/addItems',

                element: (
                    <PrivateRoute>
                        <AddItem></AddItem>
                    </PrivateRoute>
                )
            },
            {
                path: '/manageItems',

                element: (
                    <PrivateRoute>
                        <ManageItems></ManageItems>
                    </PrivateRoute>
                )

            },
            {
                path: '*',
                element: <NotFound></NotFound>,
            }






        ]
    }

])
export default router;