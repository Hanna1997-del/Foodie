import Card from "./Card";

interface ServeProps {
    
}
 
const Serve:React.FC<ServeProps> = () => {
    return ( 
        <section className=" h-[1200px] lg:h-screen mt-24 bg-fuchsia-50" >
           <div className="pt-24">
           <div className="flex flex-col gap-3  mx-auto w-[400px] ">
           <p className="text-red-600 text-center mr-16">What we Serve</p>
            <h1 className="text-4xl font-bold">Your Favourite Food Delivery Partner</h1>
           </div>
            
             <Card/>
           </div>
           
        </section>
     );
}
 
export default Serve;