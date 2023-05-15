import { useCart } from '../../../../hooks/useCart';
import { CoffeeSelected } from '../CoffeeSelected'
import styles from './CartContainer.module.css'


export function CartContainer() {
  const { cartItems } = useCart();
  return (
    <div className={styles.cartContainer}>
        {cartItems.map((item) =>(
          <CoffeeSelected key={item.id} coffee={item} />
        ))}
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
          <h4 className={styles.total}> Total</h4>
          <h4 className={styles.total}> R$ 33,20 </h4>
        </div>
      </div>

      <button className={styles.confirmOrder}> confirmar pedido </button>
    </div>
  )
}