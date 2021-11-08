import React, {useState, useEffect} from "react";
export const navItems = [
    {
      id: 1,
      title: "Home",
      path: "./",
      cName: "nav-item",
    },
    {
      id: 2,
      title: "Search",
      path: "./services",
      cName: "nav-item",
    },
    {
      id: 3,
      title: "Products",
      path: "./products",
      cName: "nav-item",
    },
    {
      id: 4,
      title: "Cart",
      path: "./cart",
      cName: "nav-item",
    },
    {
      id: 5,
      title: "Profile",
      path: "./signup",
      cName: "nav-item",
    },
    
  ];
  
  export const serviceDropdown = [
    {
      id: 1,
      title: "Marketing",
      path: "./marketing",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Consulting",
      path: "./consulting",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Design",
      path: "./design",
      cName: "submenu-item",
    },
    {
      id: 4,
      title: "Development",
      path: "./development",
      cName: "submenu-item",
    },
  ];  
    
  