import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import React, {useState, useEffect} from "react";

function CartList() {
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
            <h5>{values.title}</h5>
            <p>{values.description }</p>
          </div>
          <img src ={values.image}></img>
        </div>
            </>
          )
  
          })}      
      </div>
  
      </div>
      );
        }

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          OnlineShopping
          <Icons.FaAmazon />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            
            if (item.title === "Cart") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    //onClick = {this.CartList}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
