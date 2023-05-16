import { useEffect, useState } from "react";
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
    cartItemsTotal: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    removeCartItem: (cartItemId: string) => void;
    changeCartItemQuantity: (
        cartItemId: string,
        type: "increase" | "decrease"
    ) => void;
}

export const CartContext = createContext({} as CartContextType)
  
interface CoffeesContextProviderProps {
    children: ReactNode
}

const COFFEE_ITENS_STORAGE_KEY = "coffeeDelivery:cartItems"

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [ cartItems, setCartItems ] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_ITENS_STORAGE_KEY);
        if(storedCartItems) {
            return JSON.parse(storedCartItems);
        }
        return [];
    });

    const cartQuantity = cartItems.length;

    const cartItemsTotal = cartItems.reduce((total, cartItems) => {
        return total + cartItems.price * cartItems.quantity
    }, 0)

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

    function removeCartItem(cartItemId: string) {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(
              (cartItem) => cartItem.id === cartItemId
            );
      
            if(coffeeExistsInCart >= 0){
                draft.splice(coffeeExistsInCart, 1);
            }
        });

        setCartItems(newCart);
    }

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

    useEffect(() => {
        localStorage.setItem(COFFEE_ITENS_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    return(
        <CartContext.Provider
            value={{
                cartItems,
                cartQuantity,
                cartItemsTotal,
                addCoffeeToCart,
                removeCartItem,
                changeCartItemQuantity
            }}
        >
            { children }
        </CartContext.Provider>
    )
}