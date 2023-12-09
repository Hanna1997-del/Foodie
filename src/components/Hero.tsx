import Image from "next/image";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

interface HeroProps {
    
}
 
const Hero: React.FC<HeroProps> = () => {
    return ( 
        <section className="max-w[1440px] mt-24 h-full lg:h-[90vh] lg:flex   ">
            {/* left side */}
            <div className="lg:w-1/2 w-full">
               <div className="flex rounded-full items-center bg-pink-100 w-[200px] px-2  py-2 lg:ml-16 ml-5">
               <h3 className="text-red-500 lg:text-lg  text-md">More than faster </h3>
                <Image src="/stawberry.png" alt="berry" width={30} height={30} />
               </div>
               <h1 className="lg:text-6xl text-4xl font-bold py-5  leading-tight text-black w-full lg:px-16 px-5">Be The Fastest In Delevering Your<span className="text-red-500">Food</span></h1>
               <p className="text-gray-400 lg:px-16 px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta obcaecati error fugiat doloribus delectus consequatur sint porro vitae molestias distinctio ex laudantium rem molestiae voluptas, blanditiis animi ratione quaerat totam.</p>
               <div className="flex flex-col lg:flex-row mt-8 gap-5 ">
               <Button type="button"
                title="Order Now"
                 variants="bg-red-500 px-3 py-2 rounded-full justify-center min-w-[150px] text-white flex mx-16" />
                <Button type="button" title="Order Process" variants="bg-red-500 px-3 py-2 rounded-full 
                justify-center min-w-[150px] text-white flex mx-16 hover:bg-white hover:text-black hover:border-2
                hover:border-red-500" />
               </div>
            </div>
           {/* right side */}

           <div className="object-cover  relative mt-8 lg:mt-0">
            <Image src="/bg-1.jpeg" alt="bg" width={650} height={500}/>
            <div className="absolute top-0 left-2 flex flex-col items-center shadow-lg lg:w-[200px] w-[80px] h-[200px] lg:h-[200px]">
                <Image  src="/orange.png" alt="orange" width={100} height={100}/>
                <h5 className="text-sm font-semibold border-b-2  border-orange-500 lg:w-6">Fresh Orange</h5>
                <p  className="lg:text-lg text-md font-bold ">$44.60 </p>
                <p className="text-sm text-gray-400 ">Free Shipping</p>

                <button className="bg-red-500 lg:px-2 px-1 rounded-lg lg:py-2 py-1 text-white"><FaCartPlus size={25} /></button>

            </div>
            <div className="absolute top-8 lg:right-24 right-12 flex gap-2 shadow-lg rounded-lg px-4 py-3">
           <p className="text-green-500"> <LuAlarmClock size={25} /></p>
           <div>  <h3 className="text-gray-600">Delivery</h3>
            <p className="text-sm text-gray-400">30 Min</p></div>
            </div>

            <div className="absolute backdrop-blur-md bottom-0  lg:bottom-10 h-[100px] gap-3 flex right-16 w-[300px] shadow-lg ">
              <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">American Burger</h1>
               <p className="flex text-yellow-400"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
               <p className="text-xl font-bold"><span className="text-yellow-400 text-sm">$</span>8.75</p>
              </div>
              <div className="px-2 py-2 rounded-full">
                <Image src="/Burger.jpeg" alt="burger" width={100} height={100} />
              </div>

            </div>
           </div>

        </section>
     );
}
 
export default Hero;