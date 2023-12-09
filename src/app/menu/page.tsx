"use client";
import MenuItems from "@/components/MenuItem";
import { menuProducts } from "../../../Data/data";
import { useEffect, useState } from "react";
import axios from "axios";

interface MenuProps {
    
}
 
const Menu: React.FC<MenuProps> = () => {
    const[menus,setMenus] = useState(menuProducts);
    const fetchData =async () => {
     const res =await axios.get("http://localhost:1337/api/products?populate=image");
     if(res.data) {
        const data = res.data.data;
        const menuFromBackend = data.map((item:any)=> ({
            ...item,
            ...item?.attributes,
            image: "http://localhost:1337"+item?.attributes?.image?.data?.attributes?.url
        }))
        setMenus([...menuFromBackend]);
        console.log({menuFromBackend})
     }
    }
    useEffect(()=>{
      fetchData()
    },[])
    return ( 
        <section className="  mt-24 ">
            <h1 className="text-center font-bold text-2xl">Menu That Make You Love</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-24 gap-5 ">
            {menus.map((item)=> (
                <MenuItems {...item} />
            ))}
            </div>
        </section>
     );
}
 
export default Menu;