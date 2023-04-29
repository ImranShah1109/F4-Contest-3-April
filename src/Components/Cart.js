import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import Item from "./Item";

const Cart = () =>{
    const data = useSelector((state) => state.data.data)
    const cart = useSelector((state) => state.cart.cart);

    const [cartItems , setCartItems] = useState(cart);

    // console.log("function check ",setCartItems);
    
    let items = [];

    console.log("cartitems -> ",cartItems);
    let i = 0;
    items = data.filter((item,)=>{
        if(cartItems[i] == item.id){
            i++;
            return item;
        }
    })
    

    // console.log("cart items -> ",cartItems);
    return(
        <div className="item-section">
          <div className="items">
            {
              
              items.map(item =>(
                <Item 
                  key={item.id} 
                  image={item.images[0]} 
                  title={item.title}
                  desc={item.description} 
                  price={item.price}
                  action="Remove"
                  id={item.id}
                  setCart={setCartItems}

                />
              ))
            }
          </div>
        </div>
    )
}

export default Cart