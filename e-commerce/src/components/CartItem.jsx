
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {add , remove} from '../redux/slice/CartSlice'


const CartItem = ({item,itemIndex}) => {
 
  const dispactch =useDispatch();
  const removeFromCart =()=>{
  dispactch(remove(item.id));
  toast.sucsses('item remove')
  }
  return <div className='flex  flex-col'>
   <div className='flex items-center flex-col lg:flex-row justify-center mt-8 gap-[35px]'>
   <div className='h-[170px] '>
    <img src={item.image} className='h-full w-full'/>
   </div>
   <div className='flex flex-col items-center justify-center'>
   <div className="flex items-center text-1xl font-bold justify-center">
    <p className="text-grey-700 font-extrabold text-[1rem] text-left  w-40 mt-1">{item.title}</p>
  </div>
  <div className="flex items-center justify-center">
    <p className="w-40 text-[10px]  text-grey-400 font-medium text-lg text-left ">{item.description.split("").slice(0,50).join("")+"..."}</p>
  </div>
   
  <div className='flex flex-row gap-[3rem] justify-between '> 
  <div  className="text-green-600 font-semibold">{item.price}$</div>
    <button onClick={removeFromCart} > <AiFillDelete></AiFillDelete></button>
    
  </div>
  
  </div>
  </div>
  <hr className="w-48 h-1 mx-auto my-4  bg-gray-600 border-0 rounded md:my-10 dark:bg-gray-700"/>
  </div>;
};

export default CartItem;
