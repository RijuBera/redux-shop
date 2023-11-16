import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Cartitem from '../componect/Cartitem';
const Cart = () => {

  const {cart}=useSelector((state)=>state);
 const [totalamount,settotalamount]=useState(0);
  useEffect(()=>{
    settotalamount(cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart])


  return (
    <div  >
      <div >
   {
    cart.length ?
     (
      <div style={{display:"flex", gap:"70px", justifyContent:"space-evenly"}} >
        <div style={{display:"flex",flexDirection:"column"}}>
          {
         cart.map((item,index)=>{
     return <Cartitem key={item.id} item={item} itemindex={index}/>
    })
  }
    </div>
    <div style={{position:"relative", border:"2px solid green", width:"500px"}}>
      <div>
      <h2>Your Cart</h2>
      <h3>Summary</h3>

      <p>total item: {cart.length}</p>
     </div>
     <div style={{position:"absolute",bottom:"2px"}}>
      <h4>total amount: ${totalamount}</h4>
      <button>check out</button>
     </div>

    </div>

    </div>):
      ( <div>
      <p> cart empty </p>
      <Link to="/">
      <button>Shop now</button>
      </Link>
      </div>)
   }
   </div>
    </div>
  )
}

export default Cart;