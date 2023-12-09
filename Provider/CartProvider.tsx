"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { foodProducts, menuProducts } from "../Data/data";

interface CartProviderProps {
  children: ReactNode | ReactNode[];
}
export type CartDTO = {
  id: number;
  qty: number;

};
export const CartContext = createContext(
  {} as {
    data: [] | CartDTO[];
    setData: Dispatch<SetStateAction<[] | CartDTO[]>>;
   
    getQuantity: (id: number) => number;
      
    updateQty: (id: number, isAdd: boolean) => void
    
  }
);
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [data, setData] = useState<CartDTO[] | []>([]);
  
 
  
  

  const updateQty = (id:number, isAdd:boolean) => {
    const getNewQty = (item: CartDTO) => {
      if(isAdd){
      return  item.id == id ? item.qty + 1 : item.qty
      }else{
        return (item.id == id && item.qty > 0)? item.qty-1 : item.qty
      }
    }
    if(getQuantity(id)){
      const newData = data.map((item)=> ({
        id: item.id,
        qty: getNewQty(item)
      }))
      setData([...newData])
    }else{
      const newData = [
        ...data,{
          id,
          qty:  (isAdd ? 1 : 0)
        }
      ]
      setData([...newData])
    }
  }
  const getQuantity = (id: number) => {
    const found = data.find((item) => {
      return item.id == id;
    });
    if (found) {
      return found.qty;
    } else {
      return 0;
    }
  };
  
  return (
    <CartContext.Provider value={{ data, setData, getQuantity  ,updateQty }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
