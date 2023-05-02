import styles from './CoffeeSelected.module.css'
import capuccino from '../../../../../public/capuccino.png'
import { Trash } from '@phosphor-icons/react'

export function CoffeeSelected() {
  return (
    <div className={styles.coffeeSelected}>
        <div className={styles.info}>
            <img src={capuccino} width={64}/>
            <div className={styles.details}>
                <span> Expresso Tradicional </span>
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
                        <Trash color='#8047F8'/> REMOVER
                    </button>
                </div>
            </div>
        </div>
        <span> R$ 9,90 </span>
    </div>
  )
}