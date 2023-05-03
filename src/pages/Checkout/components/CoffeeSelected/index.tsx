import styles from './CoffeeSelected.module.css'
import { Trash } from '@phosphor-icons/react'

interface CoffeeAtributes {
    id: string
    title: string
    price: number
    imgUrl: string 
    amount?: number
}

export function CoffeeSelected({ imgUrl, title, price }: CoffeeAtributes) {
  return (
    <>
        <div className={styles.coffeeSelected}>
            <div className={styles.info}>
                <img src={imgUrl} width={64}/>
                <div className={styles.details}>
                    <span> {title} </span>
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
                        <button className={styles.remove}>
                            <Trash color='#8047F8'/> REMOVER
                        </button>
                    </div>
                </div>
            </div>
            <span className={styles.price}> {price} </span>
        </div>
        <div className={styles.divider}></div>
    </>
  )
}