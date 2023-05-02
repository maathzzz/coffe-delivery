import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import styles from './PaymentForm.module.css'
import { useState } from 'react'


export function PaymentForm() {
    const [inputRadioIsChecked, setInputRadioIsChecked] = useState('');

  return (
    <div className={styles.container}>
        <div className={styles.paymentTitle}>
            <CurrencyDollar size={24} color="#8047F8"/>
            <div className={styles.paymentText}>
                <p> Pagamento </p>
                <span> O pagamento é feito na entrega. Escolha a forma que deseja pagar </span>
            </div>
        </div>
        <form className={styles.paymentMethods}>
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
        </form>
    </div>
  )
}
