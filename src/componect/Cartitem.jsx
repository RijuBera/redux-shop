import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CounterSlice'
const Cartitem = ({item}) => {
    const dispatch=useDispatch()
    const removefromcart=()=>{
dispatch(remove(item.id));
    }
  return (
    <div >
    <div className='product'>
<div>
    <img src={item.image} style={{width:"100px", height:"100px"}} alt="" />
</div>
<div>
    <p>{item.title}</p>
    <p>{item.description.split(" ").slice(0,4).join(" ")}</p>
    <div>
        <p>
            {item.price}
     </p>
     <button onClick={removefromcart}>🗑️</button>
    </div>

</div>
    </div>
    </div>
  )
}

export default Cartitem