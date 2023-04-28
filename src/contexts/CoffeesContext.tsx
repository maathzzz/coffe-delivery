import { ReactNode, createContext, useState } from "react";
import { coffees } from '../data/coffee'

export interface CoffeeAtributes {
    title: string
    description: string
    price: number
    tags: String[]
    imgUrl: string 
    amount: number
}  

interface CoffeesContextType {
    coffeeCount: number,
    handleAddCoffeeToCart: () => void
    handleRemoveCoffeeFromCart: () => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
    children: ReactNode
  }

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [ coffeeCount, setCoffeeCount ] = useState(0)

    function handleAddCoffeeToCart() {
        setCoffeeCount(coffeeCount + 1)
    }

    function handleRemoveCoffeeFromCart() {
        if(coffeeCount != 0) {
        setCoffeeCount(coffeeCount - 1)
        } else {

        }
    }

    return(
        <CoffeesContext.Provider
            value={{
                coffeeCount,
                handleAddCoffeeToCart,
                handleRemoveCoffeeFromCart
            }}
        >
            { children }
        </CoffeesContext.Provider>
    )
}

