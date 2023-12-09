import FilterProduct from "./FilterProduct";
import { foodProducts } from "../../Data/data";
import Link from "next/link";
import { filteritems } from "../../Data/data";
import Filter from "./Filter";


interface MenuProps {
    
}

const Menu: React.FC<MenuProps> = () => {
   

     
    return ( 
        <section className="bg-white h-full mt-5">
            <h5 className="text-red-500 text-center">Our Menu</h5>
            <p className="text-3xl text-center font-bold">Menu That always make you to Fall in Love</p>

            <div className="grid grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-0 mt-5 mx-3 lg:mx-16 ">
                {filteritems.map((item)=> (
                    <Filter {...item}/>
                ))}
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1">
       {foodProducts.map((item)=> (
            <div className="  mt-10 ml-8" key={item.id}>
                <FilterProduct {...item} />
            </div>
        ))}
       </div>
        <Link href="/menu" 
        className="flex mx-auto mt-5 shadow-lg justify-center py-1 w-[200px] text-red-500">
            View More</Link>
           
        </section>
     );
}
 
export default Menu;