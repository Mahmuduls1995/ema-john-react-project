
import './App.css';
import Header from './Components/Header/Header';
import Marquee from './Components/Marquee/Marquee';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import Orders from './Components/Orders/Orders';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Shipment from './Components/Shipment/Shipment';
function App() {
  return (
    <div>
      <Header></Header>
      <Marquee></Marquee>
    <Routes>
      <Route path="/" element={<Shop></Shop>}></Route>
      <Route path="/shop" element={<Shop></Shop>}></Route>
      <Route path="/orders" element={<Orders></Orders>}></Route>
      <Route path="/inventory" element={
      <RequireAuth>
        <Inventory></Inventory>
      </RequireAuth>
      }></Route>
      <Route path="/shipment" element={
      <RequireAuth>
        <Shipment></Shipment>
      </RequireAuth>
      }></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
    </Routes>
     
    </div>
  );
}

export default App;
