import React, {useState, useEffect} from "react";

function Products() {    
    const [fake,setFake] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{
        const fakestore = async()=>{
          const response = await fetch("https://fakestoreapi.com/products/categories")
          //console.log(response);
          const jsonData = await response.json();
          setFake(jsonData);
        }
        fakestore();
      }, [])

      const handleClick = async(event)=>{
        const clickedProd = event.target.outerText;
        const response = await fetch("https://fakestoreapi.com/products/category/" + clickedProd)
        
        const jsonData = await response.json();        
        setFilteredData(jsonData);
    }      

  return (
    <div>
     <div className = "container">
       {fake.map ((values)=>{
         return(
           <div>
             <button onClick = {handleClick}>{values}</button>             
           </div>            
         )
       })}
       <div className = "prodContainer">
       {
       filteredData.map((values) => {
        return(
          <div className = "box">
            <div className = "content">
              <h5>{values.title}</h5>
              <p>{values.description }</p>
            </div>
        <img src ={values.image}></img>
        <button>Add to Cart</button>
      </div>
        )
        })}
       </div>
     </div>
    </div>
  );
}

export default Products;
