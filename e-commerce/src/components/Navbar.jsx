import {BsFillCartFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
const Navbar = () => {
const {cart} = useSelector((state)=>state);

  return <div >
  
  <nav className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto  '>
   <NavLink to="/">
    <div className='flex items-start ml-5  '>
 <p className='text-3xl font-extrabold text-green-600'>E-STORE</p>
{/**<img width={60} height={100} src='https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg?w=2000'/>
 */}
</div>
</NavLink>

         <div className='flex flex-row items-center font-medium text-slate-50 gap-5 '>

         <NavLink to='/'>
         <p>Home</p>
         </NavLink>
         
         <NavLink to='/cart'>
        <div className='relative '>
        <BsFillCartFill className='text-2xl'></BsFillCartFill>  
         {
          cart.length > 0 &&
          <span className='absolute -top-1 -right-2 bg-green-400 rounded-full text-xs w-5 h-5 flex justify-center items-center animate-bounce'>{cart.length}</span>
         } 
        </div>
        
         </NavLink>
         </div>
  </nav>

  </div>;
};

export default Navbar;
