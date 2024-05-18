import {BrowserRouter as  Router, Routes , Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Signin from "./pages/SignIn/Signin";
import Signup from "./pages/SignUp/Signup";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-bootstrap";
import Favourite from "./pages/Favourite/Favourite";

const App = () => {
  return (
   <>
    <Navbar/>
    <Router>
      {/* header  */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/favourite" element={<Favourite/>}/>
      </Routes>
       <ToastContainer/>
    </Router></>
  )
}

export default App