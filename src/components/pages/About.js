import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function About() {
  useEffect(() => {
    fetchItems();
  }, []);

   const [items, setItems] = useState([]);
  const fetchItems = async () => {
     const data = await fetch("https://fortniteapi.io/items/list?lang=en", {
      method: "GET",
      headers: {
         Authorization: "fcba5e93-48e07a0a-08199d6b-274f857e",
       },
    })
    const item = await data.json();
     console.log(item.items.backpack);
     setItems(item.items.backpack);
  }
  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
        <Link to={`/about/${item.id}`}>{item.name}</Link>
        </h1>
      ))} 
    </div>
  );
}

export default About;
