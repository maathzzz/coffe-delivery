import { ShoppingCartSimple } from '@phosphor-icons/react'
import styles from './CoffeCard.module.css'
import { useContext } from "react";
import { CoffeesContext } from '../../../contexts/CoffeesContext'

interface CoffeeAtributes {
  title: string
  description: string
  price: number
  tags: String[]
  imgUrl: string 
  amount: number
}


export function CoffeeCard({ title, description, price, tags, imgUrl, amount }: CoffeeAtributes) {
  const { coffeeCount, handleAddCoffeeToCart, handleRemoveCoffeeFromCart } = useContext(CoffeesContext)


  return (
    <div className={styles.coffeeCard}>
        <img src={imgUrl}/> 
        <div className={styles.coffeeTags}>
          {tags.map(tag => {
            return (
              <span key={Math.random() * 1000}> {tag} </span>
            ) })} 
        </div>

        <h1 className={styles.coffeeName}> {title} </h1>
        <p className={styles.coffeeDescription}> {description} </p>
        <div className={styles.buy}>
          <span className={styles.price}>R$ {price} </span>
          <div className={styles.actions}>
            <div className={styles.counter}>
              <button className={styles.minus} onClick={handleRemoveCoffeeFromCart}>
                -
              </button>
              <span> {coffeeCount} </span>
              <button className={styles.plus} onClick={handleAddCoffeeToCart}>
                +
              </button>
            </div>
            <button className={styles.cart}>
              <ShoppingCartSimple weight='fill' color='#FFFF'/>
            </button>
          </div>
        </div>
    </div>
  )
}