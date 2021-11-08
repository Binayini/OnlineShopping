import React, {useState, useEffect} from "react";

function Signup() {
    const [fake,setFake] = useState([]);

    useEffect(()=>{
        const fakestore = async()=>{
          const response = await fetch("https://fakestoreapi.com/users/1")
          console.log(response);
          const jsonData = await response.json();
          console.log(jsonData);
          setFake(jsonData);
        }
        fakestore();
      }, [])

  return (
    <div>
      
        <h4>{Text = "Phone: "}{fake.phone}</h4>
        <h4>{Text = "Username: "}{fake.username}</h4>
        <h4>{Text = "Password: "}{fake.password}</h4>
        <h4>{Text = "id: "}{fake.id}</h4>
        <h4>{Text = "email: "}{fake.email}</h4>       

    </div>
  );
}

export default Signup;
