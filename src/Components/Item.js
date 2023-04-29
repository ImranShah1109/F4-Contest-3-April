import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart,removeFromCart } from "../actions";


const Item = (props) =>{
    // console.log("props >> ",props);
    let add = "Add To Cart";
    let remove = "Remove From Cart";

    let cart = useSelector((state) => state.cart.cart)

    // console.log("setCart", props.setCart);

    let dispatch = useDispatch();

    function addItemtoCart(item){
        console.log("item added -> ",item);
        cart.push(item);
        dispatch(addToCart(cart))
    }

    function removeItemfromCart(item){
        console.log("item removed -> ",item);
        let i = cart.indexOf(item);
        if(i > -1) cart.splice(i,1);
        console.log("setCart", props.setCart);
        dispatch(removeFromCart(cart))
        console.log("after remove cart ",cart);
        props.setCart(cart);
    }


    return(
        <div className="item">
            <img src={props.image} alt="item-img" />
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
            <h4>Price : {props.price}$</h4>
            <button onClick={()=>{
                props.action == "Add" ? addItemtoCart(props.id) : removeItemfromCart(props.id)
            }}>{
                props.action == "Add" ? add : remove
            }
            </button>
        </div>
    )
}

export default Item