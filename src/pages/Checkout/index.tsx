import { CartContainer } from './components/CartContainer'
import styles from './Checkout.module.css'
import { LocationForm } from './components/LocationForm/index'
import { PaymentForm } from './components/PaymentForm'

export function Checkout() {
    return (
        <div className={styles.checkout}>
            <h2> Complete seu pedido </h2>
            <LocationForm />
            <PaymentForm />
            <h3> Cafés selecionados:</h3>
            <CartContainer />
        </div>
    )
}