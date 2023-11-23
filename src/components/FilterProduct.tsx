"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { foodProducts } from "../../Data/data";

interface FilterProductProps {
    id: number,
    title:string,
    image:string,
    price:number

}

    
    
    
//  ]

 const buttonStyle = "bg-red-500 w-5 border   text-white border-r-black border-black rounded-lg"
const FilterProduct: React.FC<FilterProductProps> = ({id,price,title,image}) => {
    const[quantity,setQuantity] = useState(1)
    const[total,setTotal] = useState(price)

    
    
    return ( 
        
                <div  className="">
                <div className=" ml-8 w-[250px] flex flex-col group gap-3 min-h-[300px] px-2 shadow-lg mt-5 ">
                    <Image src={image} alt={title} width={150} height={150} className="mx-auto"/>
                    <h3 className="font-bold text-center text-xl">{title}</h3>
                    <p className="font-bold text-gray-500 text-center">${total.toFixed(2)}</p>
                    <div className="flex justify-between">
                        <div>
                        <button className={buttonStyle} 
                        onClick={()=> setQuantity((prev)=> (prev > 1? prev-1 : 1))} >
                            -
                        </button>
                        <span className="bg-red-500 text-white px-2 py-1 rounded-lg">{quantity}</span>
                        <button  className={buttonStyle} 
                        onClick={()=> setQuantity((prev)=> (prev < 9? prev +1 : 9))} >+</button>
                        </div>
                        <div>
                        <button  className="bg-red-500 text-white px-3 py-2 rounded-md"><FaBasketShopping/></button>
                        </div>
                    </div>
                   
                </div>
                </div>
            
        
     );
}
 
export default FilterProduct;