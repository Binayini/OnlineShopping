import React, {useState, useEffect} from "react";

function Cart() {
    const [fake,setFake] = useState([]);

    useEffect(()=>{
        const fakestore = async()=>{
          const response = await fetch("https://fakestoreapi.com/carts")
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
          <h5>{Text = "ID: "}{values.id}</h5>
          <h5>{Text = "UserId: "}{values.userId}</h5>
          <h5>{Text = "Date: "}{values.date}</h5>
          <ul>
          {values.products.map((sub) =>
          <li>
            <div>
            </div>
            {Text = "Quantity:  "}
            {sub.quantity}
          </li>

          )}
          </ul>
         
          
        </div>      
      </div>
          </>
        )

        })}      
    </div>

    </div>
  );
}

export default Cart;
