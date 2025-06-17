
import {useRef} from "react"


const Home=()=>{
    const ref=useRef()
    const ref1=useRef()
    const c=()=>{
        ref1.current.src="https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/07/8cb92cc5-2171-40ae-8938-1a0c2435717b.jpg"
    }
    const c1=()=>{
        ref1.current.src="https://img.freepik.com/premium-photo/fancy-ladies-bag_862994-12252.jpg"
    }
    const c2=()=>{
        ref.current.textContent="my title"
    }
    return(
        <>
        <div onMouseEnter={c} onMouseLeave={c1}>
            <img ref={ref1} width="200px"src="https://img.freepik.com/premium-photo/fancy-ladies-bag_862994-12252.jpg"/>
        </div>
        <div onMouseEnter={c2} ref={ref}>your title</div>
        <h1>this is home page</h1>
        </>
    )
}
export default Home