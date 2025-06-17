// const App=()=>{
//   return(
//     <>
//     hello
//     <h1>ee</h1>
//     <h1>ee</h1>
//     <h1>ee</h1>
//     </>
//   )
// }
// export default App






// const App=()=>{
//   const s1={
//     color:"yellow",
//     backgroundColor:"black"
//   }
//   const s2={color:"yellow", backgroundColor:"black"}
//   return(
//     <>
//     hello
//     <h1 style={s1}>ee</h1>
//     <h1 style={s2}>ee</h1>
//     <h1 style={{color:"yellow", backgroundColor:"black"}}>ee</h1>
//     </>
//   )
// }
// export default App






// import "./style.css"
// import reactlogo from "./assets/react.svg"

// import { FaApple } from "react-icons/fa";
// const App=()=>{

//   const s1={
//     color:"yellow",
//     backgroundColor:"black"
//   }
//   const s2={color:"yellow", backgroundColor:"black"}
//   return(
//     <>
//     hello
//     <h1 style={s1}>ee</h1>
//     <h1 style={s2}>ee</h1>
//     <h1 style={{color:"yellow", backgroundColor:"black"}}>ee</h1>
//     <div className="div1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, sit.</div>
//     <img src={reactlogo} alt="" />
//     <img src="https://th.bing.com/th/id/OIP.gdNVfcnAjQURwqcuGIDHAQHaE8?rs=1&pid=ImgDetMain" alt="" srcset="" />
//     <FaApple />
//     </>
//   )
// }

// export default App






import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./home.jsx"
import About from "./about.jsx"
import Contact from "./contact.jsx"
import Navbar from "./navbar.jsx"

import ContactDetails from "./ContactDetails.jsx";
import Phone from "./phone.jsx";
const App=()=>{

  return(
    <>
     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
       <Route path="/about" element={<About></About>}></Route>

        <Route path="/contact" element={<Contact></Contact>}>  
               <Route path="/contact/details" element={<ContactDetails></ContactDetails>}></Route>
              <Route path="/contact/phone" element={<Phone></Phone>}></Route>
        </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App