import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart"
import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home";


const App = () => {
    
    return(
      <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </div>
    )
}


export default App;
