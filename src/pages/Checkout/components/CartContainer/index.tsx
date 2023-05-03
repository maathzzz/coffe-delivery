import { useCoffeeCart } from '../../../../contexts/CoffeesContext'
import { CoffeeSelected } from '../CoffeeSelected'
import styles from './CartContainer.module.css'
// import { CoffeeProps } from '../../../../contexts/CoffeesContext'

export function CartContainer() {
  const { coffeeCartItems } = useCoffeeCart()
  return (
    <div className={styles.cartContainer}>
        {coffeeCartItems.map(coffee => {
          return (
              <CoffeeSelected id={coffee.id} imgUrl={coffee.imgUrl} title={coffee.title} price={coffee.price} />
          )
        })}

      <div className={styles.frame}>

      </div>
    </div>
  )
}
