"use client"
import { ReactNode } from "react";
import CartProvider from "../../Provider/CartProvider";

interface AppRootProps {
    children: ReactNode| ReactNode[]
}
 
const AppRoot: React.FC<AppRootProps> = ({children}) => {
    return ( 
       <CartProvider>
        {children}
       </CartProvider>
     );
}
 
export default AppRoot;