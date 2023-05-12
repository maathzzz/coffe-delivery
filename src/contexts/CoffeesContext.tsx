import { useState } from "react";
import { ReactNode, createContext } from "react";
import { produce } from 'immer';

export interface CoffeeProps {
    id: string
    title: string
    description: string
    price: number
    tags: String[]
    img: string 
    amount: number
} 

export interface CartItem extends CoffeeProps{
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    addCoffeeToCart: (coffee: CartItem) => void;
}

export const CartContext = createContext({} as CartContextType)
  

interface CoffeesContextProviderProps {
    children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [ cartItems, setCartItems ] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.length;

    function addCoffeeToCart(coffee: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id);

        const newCart = produce(cartItems, (draft) => {
            if(coffeeAlreadyExistsInCart < 0) {
                draft.push(coffee);
            } else {
                draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
            }
        });

        setCartItems(newCart);
    }

    console.log(cartItems)

    return(
        <CartContext.Provider
            value={{
                cartItems,
                cartQuantity,
                addCoffeeToCart
            }}
        >
            { children }
        </CartContext.Provider>
    )
}