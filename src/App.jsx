import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Buy from "./pages/Buy";
import Success from './pages/Success';
import Apply from './pages/Apply';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='product' element={<Product />} />
        <Route path='achievements' element={<Achievements />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
        <Route path='buy' element={<Buy />} />
        <Route path="apply" element={<Apply />} />
        <Route path="success" element={<Success/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;