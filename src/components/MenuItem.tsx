"use client"
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { CartContext } from "../../Provider/CartProvider";

interface MenuItemsProps {
  id: number;
  title: string;
  image: string;
  price: number;
  
}
const buttonStyle =
  "bg-red-500 w-5 border   text-white border-r-black border-black rounded-lg";
const MenuItems: React.FC<MenuItemsProps> = ({ id, title, image, price }) => {
  const { getQuantity,updateQty } = useContext(CartContext);
  

  return (
    <div className="ml-8 w-[280px] flex flex-col group gap-5 min-h-[310px] px-2 pb-5  shadow-lg   ">
      <img src={image} alt="" width={200} height={200} />
      <h3 className="text-center font-bold">{title}</h3>
      <p className="text-center text-gray-500 text-sm">${price.toFixed(2)}</p>
      <div className="flex justify-between">
        <div>
          <button className={buttonStyle}
          onClick={()=> updateQty(id,false)}>-</button>
          <span className="bg-red-500 text-white px-2 py-1 rounded-lg">{getQuantity(id)}</span>
          <button className={buttonStyle} 
          onClick={()=> updateQty(id,true)}>+</button>
        </div>
        <div>
          <button className="bg-red-500 text-white px-3 py-2 rounded-md">
            <FaBasketShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
