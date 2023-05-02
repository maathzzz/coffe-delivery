import { CoffeeSelected } from '../CoffeeSelected'
import styles from './CartContainer.module.css'

export function CartContainer() {
  return (
    <div className={styles.cartContainer}>
      <CoffeeSelected />
    </div>
  )
}
