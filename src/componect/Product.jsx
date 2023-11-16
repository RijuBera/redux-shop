import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/slices/CounterSlice';
const Product = ({post}) => {

const {cart}=useSelector((state)=>state);
const dipatch=useDispatch();
const addtocart =()=>{
dipatch(add(post))
}
const removefromcart =()=>{
dipatch(remove(post.id))
}


  return (
    <div className='product' style={{position:"relative"}}>
        <div>
            <p>{post.title}</p>
        </div>
        <div>
            <p>
                {post.description.split(" ").slice(0,10).join(" ")+"...."}
            </p>
        </div>
        <div>
            <img src={post.image} alt="" style={{width:"70px", height:"70px"}}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly", gap:"4px", position:"absolute",bottom:"0px",}}>
        <div>
            <p>
              <span>$</span>  {post.price}
            </p>
        </div>
    <div>
            {
               cart.some((p)=>p.id===post.id)? <button onClick={removefromcart}>remove item</button>:
               <button onClick={addtocart}>add to Cart</button>
            }
        </div>
        </div>
    </div>
  )
}

export default Product