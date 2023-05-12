import { CoffeeSelected } from '../CoffeeSelected'
import styles from './CartContainer.module.css'
// import { CoffeeProps } from '../../../../contexts/CoffeesContext'


export function CartContainer() {
  return (
    <div className={styles.cartContainer}>
        <CoffeeSelected />
        <CoffeeSelected />
        <CoffeeSelected />
      <div className={styles.frame}>
        <div className={styles.rowContent}>
          <p> Total de itens </p>
          <span> R$ 29,70 </span>
        </div>
        <div className={styles.rowContent}>
          <p> Entrega </p>
          <span> R$ 3,50 </span>
        </div>
        <div className={styles.rowContent}>
          <p> Total</p>
          <span> R$ 33,20 </span>
        </div>
      </div>
    </div>
  )
}