

import { ReactNode } from "react";

interface FilterProps {
    id: number;
    title:string;
    icon: ReactNode
}
 
const Filter: React.FC<FilterProps> = ({id,title,icon}) => {
    return ( 
        <div>
            <div className="">
         
             <div key={id} className="flex    ">
                <button className="flex text-xl gap-3 transition-all duration-300  ease-in-out justify-center hover:bg-red-500 hover:text-white items-center min-w-[100px] px-3 rounded-lg h-[50px]   shadow-lg ">
                    {icon} {title}</button>
             </div>
           
            
        </div>
     
        </div>
     );
}
 
export default Filter;