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
    changeCartItemQuantity: (
        cartItemId: string,
        type: "increase" | "decrease"
      ) => void;
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

    function changeCartItemQuantity(cartItemId: string, type: 'increase' | 'decrease') {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(
              (cartItem) => cartItem.id === cartItemId
            );
      
            if (coffeeExistsInCart >= 0) {
              const item = draft[coffeeExistsInCart];
              draft[coffeeExistsInCart].quantity =
                type === "increase" ? item.quantity + 1 : item.quantity - 1;
            }
          });
        setCartItems(newCart);
    }

    return(
        <CartContext.Provider
            value={{
                cartItems,
                cartQuantity,
                addCoffeeToCart,
                changeCartItemQuantity
            }}
        >
            { children }
        </CartContext.Provider>
    )
}