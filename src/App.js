import {Login} from "./pages/Login";
import {useRoutes} from 'react-router-dom';
import LayoutI from "./component/LayoutI";
import Home from "./pages/Home";
import {Footer} from './component/Footer'
import {VehicleOption} from './pages/VehicleOption'
import {Done} from './pages/Done'

function App() {
  const routes = useRoutes([
    {path: '/', element: <Login/>},
    {path: '/home', element: <Home/>},
    {path: '/footer', element: <Footer/>},
    {path: '/vehicle', element: <VehicleOption/>},
    {path:'/done' ,element:<Done/>}

  ]);

  return (<LayoutI>
  {routes}
  </LayoutI>)
}

export default App;

