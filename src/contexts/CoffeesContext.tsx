import { useContext } from "react";
import { useState } from "react";
import { ReactNode, createContext } from "react";

export interface CoffeeProps {
    id: string
    title: string
    description: string
    price: number
    tags: String[]
    imgUrl: string 
    amount: number
} 

interface CoffeesContextType {
    coffeeCartItems: CoffeeProps[]
    handleAddCoffeeToCart: (coffee: CoffeeProps) => void
    addCoffeeUnit: (amount: number) => void
    // handleRemoveCoffeeFromCart?: () => void
}

const CoffeeCartContext = createContext<CoffeesContextType>({
    coffeeCartItems: [],
    handleAddCoffeeToCart: () => {},
    addCoffeeUnit: () => {}
});

export const useCoffeeCart = () => useContext(CoffeeCartContext);

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
    children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [coffeeCartItems, setCoffeeCartItems] = useState<CoffeeProps[]>([]);

    const handleAddCoffeeToCart = (coffee: CoffeeProps) => {
        setCoffeeCartItems([...coffeeCartItems, coffee])
        console.log("adicionando")
    }

    const addCoffeeUnit = (amount: number) => {
        amount++
    }

    return(
        <CoffeesContext.Provider
            value={{
                coffeeCartItems,
                handleAddCoffeeToCart,
                addCoffeeUnit,
            }}
        >
            { children }
        </CoffeesContext.Provider>
    )
}