"use client"
import Link from "next/link";
import { BsSearchHeart } from "react-icons/bs";
import { FaBasketShopping ,FaArrowRightLong} from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";

interface NavbarProps {
    
}
 const Links = [
    {href: "/" , title: "Home"},
    {href: "/menu" , title: "Menu"},
    {href: "/service" , title: "Service"},
    {href: "/contact" , title: "Contact"}
 ]
const Navbar: React.FC<NavbarProps> = () => {
    const[open,setOpen] = useState(false)
    return ( 
        <nav className=" max-w-[1440px]  ">
          <div className="flex w-full h-20 justify-around items-center">
          <h1 className="text-3xl font-bold text-black">F<span className="text-red-500">OO</span>D</h1>
            <div className="" >
                <ul className=" hidden lg:flex  gap-20 text-gray-500 ">
                    {Links.map((link)=>(
                        <Link  className="hover:font-bold" href={link.href} key={link.title}>{link.title}</Link>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-5 ml-36 lg:ml-0 lg:gap-8 cursor-pointer">
            <BsSearchHeart size={25} className="hover:text-red-600"/>
            <FaBasketShopping size={25}/>
            </div>

           <Button type="button"
            title="Sign In"
           
            variants="bg-red-500 px-3 py-2 rounded-xl min-w-[150px] text-white lg:flex hidden" />

            <div className=" flex md:hidden">
                <button onClick={()=> setOpen(true)}><IoMdMenu size={30}/></button>
            
            </div>

          </div>
           {/* mobile nav */}
          {open && ( <ul className="flex flex-col relative  h-screen justify-center ring-2 ring-black rounded-lg bg-red-500 w-[400px] md:w-[600px] mx-3 gap-16 text-2xl  font-bold ">
            <button onClick={()=> setOpen(false)} className="absolute top-2 right-0 "><MdOutlineRestaurantMenu size={30}/></button>
            {Links.map((link)=>(
                <Link  href={link.href} key={link.title}  className=" py-3 px-3 text-white text-center">{link.title}</Link>
            ))}
         </ul>)  }
        </nav>
         
     );
}
 
export default Navbar;