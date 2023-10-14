import React from "react";
import Navbar from "./Gurushop/LandingPage/Navbar/Navbar";
import Slider from "./Gurushop/LandingPage/Slider/MainSlider";
import Shop from "./Gurushop/LandingPage/Shop/Shop";
import About from "./Gurushop/LandingPage/About/About";
import Contact from "./Gurushop/LandingPage/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing1 from "./Gurushop/LandingPage/Landing1";
import Section1 from "./Gurushop/LandingPage/Card-section1/Section1";
import Card1 from './Gurushop/LandingPage/Card/Card1'
import Login from "./Gurushop/LandingPage/Forms/Login";
import Signup from "./Gurushop/LandingPage/Forms/Signup";
import Cart from "./Gurushop/LandingPage/Cart/Cart";
import Chekout from "./Gurushop/LandingPage/Chekout/Chekout";
import Profile from "./Gurushop/LandingPage/Forms/Profile";
import Detail from "./Gurushop/LandingPage/Detail/Detail";
const App = () => {
  return (
    <div>
      {/* <Landing1/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing1/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/card" element={<Card1/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Signup/>}/>
          <Route path="/cart"   element={<Cart/>}/>
          <Route path="/chekout"   element={<Chekout/>}/>
          <Route path="/profile"   element={<Profile/>}/>
          <Route path="/detail"   element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;




// import React from "react";
// import Navbar from "./Gurushop/LandingPage/Navbar/Navbar";
// import Slider from "./Gurushop/LandingPage/Slider/MainSlider";
// import Shop from "./Gurushop/LandingPage/Shop/Shop";
// import About from "./Gurushop/LandingPage/About/About";
// import Contact from "./Gurushop/LandingPage/Contact/Contact";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing1 from "./Gurushop/LandingPage/Landing1";
// import Section1 from "./Gurushop/LandingPage/Card-section1/Section1";
// const App = () => {
//   return (
//     <div>
//       {/* <Landing1/> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Landing1 />}></Route>
//           <Route path='/shop' element={<Shop/>}></Route>
//             <Route path='/about' element={<About/>}></Route>
//             <Route path='/Contact' element={<Contact/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
