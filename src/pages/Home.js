import React, {useState, useEffect} from "react";

function Home() {
    const [fake,setFake] = useState([]);

    useEffect(()=>{
        const fakestore = async()=>{
          const response = await fetch("https://fakestoreapi.com/products")
          //console.log(response);
          const jsonData = await response.json();
          setFake(jsonData);
        }
        fakestore();
      }, [])

  return (
    <div>
      <div className = "container">
      {fake.map((values) => {
        return(
          <>
          <div className = "box">
        <div className = "content">
          <h5>{values.title}</h5>
          <p>{values.description }</p>
        </div>
        <img src ={values.image}></img>
        <button>Add to Cart</button>
      </div>
          </>
        )

        })}      
    </div>

    </div>
  );
}

export default Home;
