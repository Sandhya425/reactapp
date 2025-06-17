
import{Link,Outlet} from "react-router-dom"
const Contact=()=>{
    return(
        <>
        <h1>this is contact page</h1>
        <div><Link to="/contact/details">Details</Link></div>
        <div><Link to="/contact/phone">Phone</Link></div>
        <Outlet></Outlet>
        </>
    )
}
export default Contact