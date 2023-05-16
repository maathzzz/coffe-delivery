import { useCart } from '../../../../hooks/useCart';
import { CoffeeSelected } from '../CoffeeSelected'
import styles from './CartContainer.module.css'

const deliveryPrice = 3.5;

export function CartContainer() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = deliveryPrice + cartItemsTotal;

  const formattedItems = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' }).format(cartItemsTotal)
  const formattedTotal =  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' }).format(cartTotal)
  const formattedDelivery = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' }).format(deliveryPrice)

  return (
    <div className={styles.cartContainer}>
        {cartItems.map((item) =>(
          <CoffeeSelected key={item.id} coffee={item} />
        ))}
      <div className={styles.frame}>
        <div className={styles.rowContent}>
          <p> Total de itens </p>
          <span> {formattedItems} </span>
        </div>
        <div className={styles.rowContent}>
          <p> Entrega </p>
          <span> {formattedDelivery} </span>
        </div>
        <div className={styles.rowContent}>
          <h4 className={styles.total}> Total</h4>
          <h4 className={styles.total}> {formattedTotal}</h4>
        </div>
      </div>

      <button className={styles.confirmOrder} disabled={cartQuantity <= 0} type='submit'> confirmar pedido </button>
    </div>
  )
}