import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  const [shad, setshad] = useState("dark")
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"black",color:"white",width:"100%"}}>
        <NavLink to="/">
        <h2 style={{color:"white"}}><span>🏠</span>Ecomzy</h2>
    </NavLink>
        <div style={{display:"flex",gap:"16px" ,color:'white'}}>
          <NavLink to="/">
        <p style={{color:'white'}}>home</p>
          </NavLink>
          <NavLink to="/cart">
          <p style={{position:"relative"}}>🛒 {
            cart.length>0 &&
            <span className='icon' >{cart.length}
            </span>}</p>
         </NavLink>
        <button onClick={()=>{
           let a= document.body;
           if(a.style.backgroundColor==="black"){
            a.style.backgroundColor="white"
            setshad("dark")
           }
           else{
            a.style.backgroundColor="black" 
            setshad("light")
           }
        }}>{shad}</button>
        </div>
    </div>
  )
}

export default Navbar