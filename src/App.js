import {Login} from "./pages/Login";
import {useRoutes} from 'react-router-dom';
import LayoutI from "./component/LayoutI";
import Home from "./pages/Home";
import {Footer} from './component/Footer'
import {VehicleOption} from './pages/VehicleOption'
import {Done} from './pages/Done';
import {ContactInfo} from './pages/ContactInfo'
import {Summary } from './pages/Summary'
import { useState } from "react";

function App() {
  const [nextStapper,setNextStapper]=useState(1)
  const routes = useRoutes([
    {path: '/', element: <Login/>},
    {path: '/home', element: <Home/>},
    {path: '/vehicle', element: <VehicleOption nextStapper={nextStapper} setNextStapper={setNextStapper} />},
    {path:'/contact' ,element:<ContactInfo nextStapper={nextStapper} setNextStapper={setNextStapper} />},
    {path:'/summary',element:<Summary nextStapper={nextStapper} setNextStapper={setNextStapper} />},
    {path:'/done' ,element:<Done/>},
    {path: '/footer', element: <Footer/>},


  ]);

  return (
  <LayoutI >
  {routes}
  </LayoutI>)
}

export default App;

