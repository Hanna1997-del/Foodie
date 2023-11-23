interface AboutProps {
    
}
 

const About: React.FC<AboutProps> = () => {
    return ( 
     <section className="h-screen">
       <div className="flex flex-col justify-center items-center gap-4 mt-10">
       <h1 className="text-4xl font-bold">Testimonials About Us</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eaque?</p>
       </div>
        <div>
            <button></button>
            <button></button>
        </div>
     </section>
    
    );
}
 
export default About;