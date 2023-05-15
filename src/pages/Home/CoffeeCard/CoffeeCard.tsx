import { ShoppingCartSimple } from '@phosphor-icons/react'
import styles from './CoffeCard.module.css'
import { useCart } from '../../../hooks/useCart'
import { useState } from "react";

export interface CoffeeAtributes {
  id: string
  title: string
  description: string
  price: number
  tags: string[]
  img: string 
  amount: number
}

interface CoffeeProps {
  coffee: CoffeeAtributes;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useCart();

  function handleIncrease() {
    setQuantity((state) => state + 1);
    console.log("add")
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <div className={styles.coffeeCard}>
        <img src={coffee.img}/> 
        <div className={styles.coffeeTags}>
          {coffee.tags.map(tag => {
            return (
              <span key={Math.random() * 1000}> {tag} </span>
            ) })} 
        </div>

        <h1 className={styles.coffeeName}> {coffee.title} </h1>
        <p className={styles.coffeeDescription}> {coffee.description} </p>
        <div className={styles.buy}>
          <span className={styles.price}> { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' }).format(coffee.price) } </span>
          <div className={styles.actions}>
            <div className={styles.counter}>
              <button className={styles.minus} disabled={quantity <= 1} onClick={handleDecrease}>
                -
              </button>
              <span> {quantity} </span>
              <button className={styles.plus} onClick={handleIncrease}>
                +
              </button>
            </div>
            <button className={styles.cart} onClick={handleAddCoffeeToCart}>
              <ShoppingCartSimple weight='fill' color='#FFFF'/>
            </button>
          </div>
        </div>
    </div>
  )
}