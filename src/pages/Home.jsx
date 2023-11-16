import React, { useEffect, useState } from 'react'
import Product from '../componect/Product';
const Home = () => {
  const Api="https://fakestoreapi.com/products";
  const [loading ,setloading]=useState(false)
  const [posts ,setposts]=useState([])
  async function fetchpro(){
    setloading(true)
    try {
      let result=await fetch(Api)
      const data=await result.json();
      setposts(data);
    } catch (error) {
      console.log("no")
      setposts([])
    }
    setloading(false);
  }
  useEffect(()=>{
    fetchpro();
  },[])
  return (
    <div style={{display:'flex',justifyContent:"space-around",maxWidth:"790px"}}>
      {
        loading ? <p>loading </p> :
          posts.length > 0 ? 
            (<div className='l'>{
              posts.map((post)=>{
               return (<Product key={post.id} post={post}/>)
              })
            }</div> )
          :
          (<p>no data found</p>)
        
      }
    </div>
  )
}

export default Home