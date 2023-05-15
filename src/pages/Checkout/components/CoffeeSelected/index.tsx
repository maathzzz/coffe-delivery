import { CartItem } from '../../../../contexts/CoffeesContext'
import { useCart } from '../../../../hooks/useCart';
import styles from './CoffeeSelected.module.css'
import { Trash } from '@phosphor-icons/react'
interface CoffeeCardCartProps {
    coffee: CartItem
}

export function CoffeeSelected({ coffee }: CoffeeCardCartProps) {
    const { changeCartItemQuantity } = useCart();
    const coffeeTotal = coffee.price * coffee.quantity

    function handleIncrease(){
        changeCartItemQuantity(coffee.id, "increase")
    }

    function handleDecrease(){
        changeCartItemQuantity(coffee.id, "decrease")
    }

  return (
    <>
        <div className={styles.coffeeSelected}>
            <div className={styles.info}>
                <img src={coffee.img} width={64}/>
                <div className={styles.details}>
                    <span> {coffee.title} </span>
                    <div className={styles.actions}>
                        <div className={styles.counter}>
                            <button className={styles.minus} onClick={handleDecrease}>
                                -
                            </button>
                            <span> {coffee.quantity} </span>
                            <button className={styles.plus} onClick={handleIncrease}>
                                +
                            </button>
                        </div>
                        <button className={styles.remove}>
                            <Trash color='#8047F8'/> REMOVER
                        </button>
                    </div>
                </div>
            </div>
            <span className={styles.price}> { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' }).format(coffeeTotal) } </span>
        </div>
        <div className={styles.divider}></div>
    </>
  )
}