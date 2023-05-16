import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import styles from './PaymentForm.module.css'


export function PaymentForm() {

  return (
    <form className={styles.container}>
      <div className={styles.child}>
        <div className={styles.paymentTitle}>
              <CurrencyDollar size={24} color="#8047F8"/>
              <div className={styles.paymentText}>
                  <p> Pagamento </p>
                  <span> O pagamento é feito na entrega. Escolha a forma que deseja pagar </span>
              </div>
          </div>
          <div className={styles.paymentMethods}>
            <div className={styles.creditCard}>
                  <CreditCard size={20} color="#8047F8"/>
                  <span> CARTÃO DE CRÉDITO</span>
            </div>
            <div className={styles.debitCard}>
                  <Bank size={20} color="#8047F8"/>
                  <span> CARTÃO DE DÉBITO</span>
            </div>
            <div className={styles.creditCard}>
                  <Money size={20} color="#8047F8"/>
                  <span> DINHEIRO </span>
            </div>
          </div>
      </div>
    </form>
  )
}
