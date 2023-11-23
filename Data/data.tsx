import { PiHamburgerBold,PiTriangleDuotone } from "react-icons/pi";
import { LuSandwich } from "react-icons/lu";
import { GiBowlOfRice } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { IoIceCream,IoFilter } from "react-icons/io5";
import { ReactNode } from "react";

type Product = {
    id: number,
    title:string,
    image:string,
    price:number, 
    
}
type Filter = {
    id:number,
    icon: ReactNode;
    title:string;
}
type filter = Filter[];
type Products =  Product[];

export const foodProducts : Products = [
    {id:1, image: "/chessy burger.webp", title: "Cheesy Beef Burger",price:2.50},
    {id:2, image: "/cheese sandwich.webp", title: "Chicken Ham with Cheese Sandwich",price:2.50},
    {id:3, image: "/japanese curry rice.webp", title: "Japanese Curry Chicken with Pearl Rice",price:2.50},
    {id:4, image: "/Americano.webp", title: "Hot Americano",price:2.50},
    {id:5, image: "/milk icecream.webp", title: "Dairy-Free soft serve ice cream",price:2.50},
    {id:6, image: "/tuna mayo onigiri.webp", title: "Tuna Mayo Onigiri",price:2.50},
    {id:7, image: "/roasted wrap.webp", title: "Chicken Roasted Wrap",price:2.50},
    {id:8, image: "/ebi burger.webp", title: "Ebi Burger",price:2.50},
   
]
export const filteritems : filter = [
    {id:1, title: "", icon:<IoFilter />},
    {id:2, title:"Burger", icon:<PiHamburgerBold />},
    {id:3, title: "Sandwich", icon:<LuSandwich />},
    {id:4, title: "Curry Rice", icon:<GiBowlOfRice />},
    {id:5, title: "Coffee", icon:<SiBuymeacoffee />},
    {id:6, title: "Icecream", icon:<IoIceCream />},
    {id:7, title: "Onigiri", icon:<PiTriangleDuotone />},
 ]




