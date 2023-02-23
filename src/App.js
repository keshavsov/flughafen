import { Login } from "./pages/Login";
import { useRoutes } from 'react-router-dom';
import LayoutI from "./component/LayoutI";
import Home from "./pages/Home";
import { Footer } from './component/Footer'
import { VehicleOption } from './pages/VehicleOption'
import { Done } from './pages/Done';
import { ContactInfo } from './pages/ContactInfo'
import { Summary } from './pages/Summary'
import {DriveAndVehicle} from './pages/DriveAndVehicle'
import { AdminBooking } from './pages/AdminBooking'
import {EditProfile} from "./pages/EditProfile"
import {DriverRegistration} from "./pages/DriverRegistration"

function App() {
  const routes = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/home', element: <Home /> },
    { path: '/vehicle', element: <VehicleOption /> },
    { path: '/contact', element: <ContactInfo /> },
    { path: '/summary', element: <Summary /> },
    { path: '/done', element: <Done /> },
    { path: '/adminbooking', element: <AdminBooking /> },
    { path: '/drive-vehicle', element: <DriveAndVehicle/> },
    { path: '/edit-profile', element: <EditProfile/> },
    { path: '/driver-reg', element: <DriverRegistration/> },

    { path: '/footer', element: <Footer /> },


  ]);

  return (<>
    
    <LayoutI >
      {routes}
    </LayoutI>
    </>)
}

export default App;

