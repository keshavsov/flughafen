import {Login} from "./pages/Login";
import {useRoutes} from 'react-router-dom';
import LayoutI from "./component/LayoutI";
import Home from "./pages/Home";
import {Footer} from './component/Footer'
import {VehicleOption} from './pages/VehicleOption'
import {Done} from './pages/Done';
import {ContactInfo} from './pages/ContactInfo'
import {Summary } from './pages/Summary'
function App() {
  const routes = useRoutes([
    {path: '/', element: <Login/>},
    {path: '/home', element: <Home/>},
    {path: '/footer', element: <Footer/>},
    {path: '/vehicle', element: <VehicleOption/>},
    {path:'/done' ,element:<Done/>},
    {path:'/contact' ,element:<ContactInfo/>},
    {path:'/summary',element:<Summary/>}


  ]);

  return (
  <LayoutI>
  {routes}
  </LayoutI>)
}

export default App;

