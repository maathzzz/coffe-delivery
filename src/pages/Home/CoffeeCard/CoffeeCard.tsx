import { ShoppingCartSimple } from '@phosphor-icons/react'
import styles from './CoffeCard.module.css'


interface CoffeeAtributes {
  title: string
  description: string
  price: number
  tags: String[]
  imgUrl: string 

}


export function CoffeeCard({ title, description, price, tags, imgUrl }: CoffeeAtributes) {

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
              <span> 1 </span>
              <button className={styles.plus}>
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