
import  "./style.css"

const About=()=>{
    const arr=[2,4,5,6,7,2]
    // const obj=[{
    //     "name":"sanu",
    //     "class":12
    // }]

    let product = [
    {
       "productname": "himalaya",
        "productbrand":" bio",
        "productprice": 200,
        "productimage":<img width="200px"src="https://cdn2.momjunction.com/wp-content/uploads/2014/08/Top-10-Useful-Himalaya-Baby-Products-For-Your-Little-Ones.jpg"></img>
    },
    {
        "productname": "dove",
        "productbrand": "DOV",
        "productprice": 450,
        "productimage": <img width="200px" src="https://cdn.shopify.com/s/files/1/1033/9447/files/Untitled_design_13_800x.png?v=1620177220"></img>
    },
    {
        "productname": "derma",
        "productbrand":"DERMAa",
        "productprice": 500,
       "productimage": <img width="200px"src="https://i.pinimg.com/736x/11/80/d6/1180d6a0c5677c9105f73c6a46f4f80e.jpg"></img>
    }]

    return(
        <>
        <h1>this is about page</h1>
        {
            arr.map(e=>(
                <div>
                    <div>{e}</div>
                </div>
            ))
        }



        {/* {
            obj.map(e=>(
                 <div>
                    <div>{e.name}</div>
                </div>
            ))
        } */}



       <div className="pro">
        {
        
           product.map(e=>(
               <div className="">
                <div>{e.productname}</div> 
                <div>{e.productbrand}</div>
                <div>{e.productprice}</div>
                <div>{e.productimage}</div>
                </div>
            
            ))
        }
        </div>
        </>
    )
}
export default About            