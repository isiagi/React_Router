import React, {useState, useEffect} from 'react'

function Item({match}) {
    useEffect(() => {
        fetchItems();
      }, []);
    
       const [items, setItems] = useState({
           images: {}
       });
      const fetchItems = async () => {
         const data = await fetch(`https://fortniteapi.io/items/get?id=${match.params.id}`,{
            method: "GET",
            headers: {
               Authorization: "fcba5e93-48e07a0a-08199d6b-274f857e",
             },
        })
        const item = await data.json();
         console.log(item);
         setItems(item.item);
      }
    return (
        <div>
            <h1>{items.id}</h1>
            <img src={items.images.icon} alt="am testing"/>
        </div>
    )
}

export default Item
