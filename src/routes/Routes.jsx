import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Home from '../components/pages/Home';
import Product from '../components/pages/Product';
import Blog from '../components/pages/Blog';
import Contact from '../components/pages/Contact';
import About from '../components/pages/About';
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { 
                index: true, 
                Component: Home
            },
            { 
                path: 'product', 
                Component: Product
            },
            { 
                path: 'blog', 
                Component: Blog
            },
            { 
                path: 'contact', 
                Component: Contact
            },
            { 
                path: 'about', 
                Component: About
            },
            { 
                path: 'login', 
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
        
    }
]);

export default Router;