import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Services from "../pages/Services";


function Dropdown() {
    const [fake,setFake] = useState([]);

    useEffect(()=>{
        const fakestore = async()=>{
          const response = await fetch("https://fakestoreapi.com/products/categories")
          //console.log(response);
          const jsonData = await response.json();
          console.log(response);
          setFake(jsonData);
        }
        fakestore();
      }, [])  

  return (
    <div>
      <ul
        className={fake ? "services-submenu clicked" : "services-submenu"}
        //</div>onClick={() => setFake(!fake)
        //}
      >
      {fake.map((item, key) => {
        return(
            <li key={item.index}>
            <Link
              //to={item.path}
              className="links"
              //onClick={Services.fakecatitems(item)}
            >
              {item}
            </Link>
          </li>
        )

        })}  
        </ul>    
    

    </div>
  );
}

export default Dropdown;
