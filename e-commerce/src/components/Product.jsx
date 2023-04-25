import { useDispatch, useSelector } from "react-redux";
import {  ToastContainer, toast } from 'react-toastify';

import {add , remove} from '../redux/slice/CartSlice'

const Product = ({post}) => {

const{cart} = useSelector((state)=> state)
const dispactch = useDispatch();

const addToCart=()=>{

  dispactch(add(post));
 toast.success("add to cart")
}


const removeToCart=()=>{

  dispactch(remove(post.id));
 
}

  return   <div className=" flex flex-col item-center justify-center
   hover:scale-110 transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5 outline  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]">

  <div className="flex items-center text-1xl font-bold justify-center">
    <p className="text-grey-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title.split("").slice(0,20).join("")+"..."}</p>
  </div>
  <div className="flex items-center justify-center">
    <p className="w-40 text-[10px]  text-grey-400 font-medium text-lg text-left truncate">{post.description.split("").slice(0,20).join("")+"..."}</p>
  </div>
  <div className="h-[170px] ">
    <img src={post.image} className="h-full w-full" />
  </div>
  <div className="flex flex-row justify-between gap-12 items-center w-full mt-5" >
  <div>
    <p className="text-green-600 font-semibold">{post.price} $</p>
  </div>
  <div>
    {
      cart.some((p)=> p.id==post.id) ?
       <button className="border rounded-xl font-semibold text-gray-600 hover:bg-slate-600 hover:text-gray-100 p-3" onClick={removeToCart}>Remove Item</button>
        : 
      <button className="border rounded-xl font-semibold text-gray-600 hover:bg-slate-600 hover:text-gray-100 p-3"  onClick={addToCart}>Add to Cart</button>
    }
  </div>
  </div>

</div>
};

export default Product;
