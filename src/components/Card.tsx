import { LiaClipboardListSolid } from "react-icons/lia";
import { MdDeliveryDining } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
interface CardProps {
    
}
 const ServeData = [
    {icon: <LiaClipboardListSolid />,
     title: "Easy To Order",
   description:"Ordering is a breeze with our user-friendly app. Just a few taps, and you're on your way to a delicious meal." },
   {
    icon: <MdDeliveryDining />,
    title:"Fastest Delivery",
    description:"Whether you're at home, the office, or a friend's place, we've got you covered. Our delivery network spans across the city, ensuring that you can enjoy your favorite meals wherever you are."
   },
   {
    icon:<IoFastFoodSharp />,
    title: "Best Quality",
    description:"Explore a menu curated with a variety of cuisines to satisfy every craving. From sizzling street food to gourmet delights, we've got it all."
   }
 ]
const Card: React.FC<CardProps> = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 lg:gap-2 lg:grid-cols-3  mx-16 mt-10">
            {ServeData.map((serve)=>(
                <div key={serve.title}  className="cursor-pointer w-[300px] min-h-[100px] flex flex-col gap-5 rounded-lg   shadow-sm hover:opacity-1 mt-5 hover:shadow-xl bg-white px-8 py-3">
                    <h1 className="text-[100px] flex justify-center">{serve.icon}</h1>
                    <h3 className="font-bold text-2xl text-center">{serve.title}</h3>
                    <p className="text-gray-500  text-sm">{serve.description}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Card;