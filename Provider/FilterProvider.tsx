import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface FilterProviderProps {
    children: ReactNode | ReactNode[]
}
export type FilterDTO = [
    id: number,
    Category: ""

] 
const FilterContext = createContext(
    {} as {
        data: [] | FilterDTO[];
        setData: Dispatch<SetStateAction<[] | FilterDTO[]>>
        filteritems: [] | FilterDTO[]
        setFilterItems: Dispatch<SetStateAction<[] | FilterDTO[]>>
        selecteditems: string
        setSelectedItems: Dispatch<SetStateAction<string>>
    }
)
const FilterProvider: React.FC<FilterProviderProps> = ({children}) => {
    const[data,setData] = useState<FilterDTO[] | []>([])
    const[filteritems,setFilterItems] = useState<FilterDTO[] |[]>([])
    const[selecteditems,setSelectedItems] = useState("all")

    const Fillter = (Category :string) => {
      
    }

    return ( 
        <FilterContext.Provider value={{data,setData,filteritems,setFilterItems, selecteditems,setSelectedItems}}>
            {children}
        </FilterContext.Provider>
     );
}
 
export default FilterProvider;