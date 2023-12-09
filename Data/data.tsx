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
    Category: string;
}
 type Filter = {
    id:number,
    icon: ReactNode;
    title:string;
    Category: string;
}
 type filter = Filter[];
 type Products =  Product[];

export const foodProducts : Products = [
    {id:1, image: "/chessy burger.webp", title: "Cheesy Beef Burger",Category: "Burger", price:2.50},
    {id:2, image: "/cheese sandwich.webp", title: "Chicken Ham with Cheese Sandwich", Category: "Sandwich",price:2.50},
    {id:3, image: "/japanese curry rice.webp", title: "Japanese Curry Chicken with Pearl Rice", Category: "Curry Rice",price:2.50},
    {id:4, image: "/Americano.webp", title: "Hot Americano", Category: "Coffee",price:2.50},
    {id:5, image: "/milk icecream.webp", title: "Dairy-Free soft serve ice cream",Category: "Icecream",price:2.50},
    {id:6, image: "/tuna mayo onigiri.webp", title: "Tuna Mayo Onigiri",Category: "Onigiri",price:2.50},
    {id:7, image: "/roasted wrap.webp", title: "Chicken Roasted Wrap",Category: "Sandwich",price:2.50},
    {id:8, image: "/ebi burger.webp", title: "Ebi Burger",Category: "Burger",price:2.50},
   
]
export const filteritems : filter = [
    {id:1, title: "", Category: "all", icon:<IoFilter />},
    {id:2, title:"Burger",Category: "Burger", icon:<PiHamburgerBold />},
    {id:3, title: "Sandwich",Category: "Sandwich", icon:<LuSandwich />},
    {id:4, title: "Curry Rice",Category: "Curry Rice", icon:<GiBowlOfRice />},
    {id:5, title: "Coffee",Category: "Coffee" ,icon:<SiBuymeacoffee />},
    {id:6, title: "Icecream",Category: "Iceicream", icon:<IoIceCream />},
    {id:7, title: "Onigiri",Category: "Onigiri", icon:<PiTriangleDuotone />},
 ]
 export const menuProducts : Products = [
    {id:1, image: "/chessy burger.webp", title: "Cheesy Beef Burger",Category: "Sandwich",price:2.50},
    {id:2, image: "/cheese sandwich.webp", title: "Chicken Ham with Cheese Sandwich",Category: "Sandwich",price:2.50},
    {id:3, image: "/japanese curry rice.webp", title: "Japanese Curry Chicken with Pearl Rice",Category: "Sandwich",price:2.50},
    {id:4, image: "/Americano.webp", title: "Hot Americano",Category: "Sandwich",price:2.50},
    {id:5, image: "/milk icecream.webp", title: "Dairy-Free soft serve ice cream",Category: "Sandwich",price:2.50},
    {id:6, image: "/tuna mayo onigiri.webp", title: "Tuna Mayo Onigiri",Category: "Sandwich",price:2.50},
    {id:7, image: "/roasted wrap.webp", title: "Chicken Roasted Wrap",Category: "Sandwich",price:2.50},
    {id:8, image: "/aglio.webp", title: "Aglio Rice",Category: "Sandwich",price:2.50},
    {id:9, image: "/basil rice.webp", title: "Basil Rice",Category: "Sandwich",price:2.50},
    {id:10, image: "/biryani.webp", title: "Biryani Rice",Category: "Sandwich",price:2.50},
    {id:11, image: "/blue tuna.webp", title: "Blue Tuna",Category: "Sandwich",price:2.50},
    {id:12, image: "/carbonara.webp", title: "Cabonara",Category: "Sandwich",price:2.50},
    {id:13, image: "/cheese egg.webp", title: "cheese egg",Category: "Sandwich",price:2.50},
    {id:14, image: "/chicken teriyaki.webp", title: "Chicken Teriyaki",Category: "Sandwich",price:2.50},
    {id:15, image: "/chickensau.webp", title: "Chicken Sau",Category: "Sandwich",price:2.50},
    {id:16, image: "/chunky.webp", title: "Chunky",Category: "Sandwich",price:2.50},
   
]




