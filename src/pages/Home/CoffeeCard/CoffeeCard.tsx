import { ShoppingCartSimple } from '@phosphor-icons/react'
import styles from './CoffeCard.module.css'
import { useCoffeeCart } from '../../../contexts/CoffeesContext'

interface CoffeeAtributes {
  id: string
  title: string
  description: string
  price: number
  tags: String[]
  imgUrl: string 
  amount: number
}


export function CoffeeCard({ id, title, description, price, tags, imgUrl, amount }: CoffeeAtributes) {

  const coffee = {
    id, 
    title, 
    description, 
    price, 
    tags, 
    imgUrl, 
    amount
  }

  const { handleAddCoffeeToCart, addCoffeeUnit } = useCoffeeCart()

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
              <button className={styles.minus}>
                -
              </button>
              <span> {amount} </span>
              <button className={styles.plus} onClick={() => addCoffeeUnit(amount)}>
                +
              </button>
            </div>
            <button className={styles.cart} onClick={() => handleAddCoffeeToCart(coffee)}>
              <ShoppingCartSimple weight='fill' color='#FFFF'/>
            </button>
          </div>
        </div>
    </div>
  )
}