import Home from './Component/Home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './Component/Home.css';
import Button from './Component/Button';
import card1 from './Component/Card1';
import check from './Component/Check'
import ugly from "./Component/Ugly"
import Card3 from "./Component/Card3"
import Form1 from './Component/Form1'
import Card4 from './Component/Card4';
import Follow from "./Component/Follow"
import Signin from "./Component/Signin"
import Login from "./Component/Login"
import About from "./Component/About"
import Contactus from './Component/Contactus';
import Products from './Component/Products';
import Product from "./Component/Product";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Signin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:productId' element={<Product/>} />
        </Routes>
        {/* <Home /> */}
        {/* <Signin />
        <Login />
        <About /> */}
        {/* <Contactus/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
