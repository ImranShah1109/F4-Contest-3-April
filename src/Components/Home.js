import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchData } from "../actions";
import Item from "./Item";


const Home = () =>{
    const loading = useSelector((state) => state.data.loading)
    const data = useSelector((state) => state.data.data)
    const error = useSelector((state) => state.data.error)

    let items = useSelector((state) => state.cart.items)
    let cart = useSelector((state) => state.cart.cart)

    // console.log("items ",items," cart ",cart);

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchData())
    },[dispatch])

    // console.log("data >>",data);
    if(loading){
      return <h1>Loading.....</h1>
    }
    if(error){
      return <h1>Error : {error}</h1>
    }
    return(
        <div className="item-section">
          <div className="items">
            {
              
              data.map(item =>(
                <Item 
                  key={item.id} 
                  image={item.images[0]} 
                  title={item.title}
                  desc={item.description} 
                  price={item.price}
                  action="Add"
                  id={item.id}
                  setCart={()=>{console.log("hello");}}
                />
              ))
            }
          </div>
        </div>
    )
}

export default Home;