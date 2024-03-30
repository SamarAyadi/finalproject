
import './App.css';
import { RouterProvider, createBrowserRouter   } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import NotFound from './Components/NotFound/NotFound';





let routers = createBrowserRouter([
    {path:'/', element:<Layout />, children: [
        {index: true, element: <Home />},
        {path:'login', element: <Login />},
        {path:'register', element: <Register />},
        {path:'categories', element: <Categories />},
        {path:'brands', element: <Brands />},
        {path:'cart', element: <Cart />},
        {path:'*', element: <NotFound />},
    
    ]}
])


function App() {
  return (
    <RouterProvider router={routers}></RouterProvider>
  );
}

export default App;
