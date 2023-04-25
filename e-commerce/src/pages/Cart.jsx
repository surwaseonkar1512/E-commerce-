import React, { useEffect, useState }  from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
const Cart = () => {
  
  const [totalAmount,setTotalAmount] =useState(0); 


  const {cart}= useSelector((state)=>state);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc ,curr)=> acc + curr.price,0));
}, [cart])
  


  return(


  <div className=''>
      {
       cart.length > 0 ?

       ( <div className='flex flex-col lg:flex-row justify-center gap-[4rem]'>
       <div className='flex flex-col  items-center justify-center '>
        {
          cart.map((item,index)=>{
            return <CartItem key={item.id} item={item} itemIndex={index}/>
          })
        }
        </div>
        <div className='lg:mt-[10rem] md:mt-[8rem] '>
        <div className='flex flex-col items-center gap-[10rem]'>
          
          <div className=''>
          <p className=' text-green-600 font-semibold text-xl'>Your Cart</p>
          <p className='text-green-600 font-extrabold text-3xl'>SUMMERY</p>
          <p><span>total Items : {cart.length}</span></p>
          </div>
          

          


        </div>

        <div className='mt-[10rem] flex items-center flex-col'>
          <p className='text-gray-600 text-xl font-semibold'>Total Amount :<span className='text-black font-extrabold'>{totalAmount}$</span></p>
          <button className='p-[3px] rounded-xl text-gray-50 bg-green-600 text-xl pl-[4rem] pr-[4rem] font-bold'>Checkout Now</button>
        </div>
        <hr className="w-58 h-[0.5px] mx-auto my-4  bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700"/>
        </div>
       </div>
       
       
       )
       
       :
       
       (<div className='flex flex-col gap-10 m-[10rem] items-center justify-center text-[6xl]'>
        <h1 className='flex font-bold items-center justify-center'> Cart is Empty !</h1>
        <Link to={'/'} ><button className='flex font-semibold border-[1px] rounded-lg p-[12px] text-gray-900 hover:bg-gray-950 hover:text-gray-100'>
          Shop Now
        </button></Link>
       </div>)
      }
       
    </div>
)
    
  
}

export default Cart