import styles from './Checkout.module.css'
import { LocationForm } from './LocationForm'

export function Checkout() {
    return (
        <div className={styles.checkout}>
            <h2> Complete seu pedido </h2>
            <LocationForm />

        </div>
    )
}