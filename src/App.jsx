import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Signin from "./pages/SignIn/Signin";
import Signup from "./pages/SignUp/Signup";
import Navbar from "./Components/Navbar/Navbar";
import ProtectedRoute from "./ProtectedRoutes";
import Shipping from "./pages/Shipping/Shipping";
import View from "./pages/view/View";

const App = () => {
  return (
   <>
   <Navbar/>
      {/* header  */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/order" element={<ProtectedRoute><Shipping/></ProtectedRoute>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
    </>
  )
}

export default App
