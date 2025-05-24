import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from './Home';
import Product from './Product';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home},
            { path: 'product', Component: Product},
            { path: 'blog', Component: Blog},
            { path: 'contact', Component: Contact},
            { path: 'about', Component: About}
        ]
        
    }
]);

export default Router;