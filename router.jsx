import { createBrowserRouter , createHashRouter } from "react-router-dom";
import Login from "./src/components/login/Login";
import Home from "./src/components/home/Home";
import Register from "./src/components/register/Register";
import MainLayout from "./src/layout/MainLayout";
import Products from "./src/components/products/Products";
import Cart from "./src/components/cart/Cart";
import Men from "./src/components/men/Men";
import Women from "./src/components/women/Women"
import Kids from "./src/components/kids/Kids";
import Baby from "./src/components/baby/Baby";
import Accessories from "./src/components/accessories/Accessories";
import HomeProducts from "./src/components/homeproducts/HomeProducts";

const router = createHashRouter ([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'login',
                element:<Login/>
            },
            {
                path: 'register',
                element:<Register/>
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'men',
                element: <Men/>
            },
            {
                path: 'women',
                element: <Women/>
            },
            {
                path: 'kids',
                element: <Kids/>
            },
            {
                path: 'baby',
                element: <Baby/>
            },
            {
                path: 'accessories',
                element: <Accessories/>
            },
            {
                path: 'homeProducts',
                element: <HomeProducts/>
            }
        ]
    }
    
]);

export default router;