"use client"
import Image from "next/image";

import { foodProducts } from "../../Data/data";

interface FilterProductProps {
    id: number,
    title:string,
    image:string,
    price:number

}

    
    
    
//  ]

 
const FilterProduct: React.FC<FilterProductProps> = ({id,price,title,image}) => {
   

    
    
    return ( 
        
                <div  className="">
                <div className=" ml-8 w-[250px] flex flex-col group gap-3 min-h-[300px] px-2 shadow-lg mt-5 ">
                    <Image src={image} alt={title} width={150} height={150} className="mx-auto"/>
                    <h3 className="font-bold text-center text-xl">{title}</h3>
                    <p className="font-bold text-gray-500 text-center">${price.toFixed(2)}</p>
                  
                </div>
                </div>
            
        
     );
}
 
export default FilterProduct;