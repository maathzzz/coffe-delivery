import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import driver from '../../assets/Illustration.png'
import styles from './Sucess.module.css'

export function Sucess() {
    return (
        <div className={styles.sucess}>
            <div className={styles.title}>
                <h1> Uhu! Pedido confirmado </h1>
                <p> Agora é só aguardar que logo o café chegará até você! </p>
            </div>
            <div className={styles.orderInfo}>
                <div className={styles.local}>
                    <div className={styles.localIcon}>
                        <MapPin weight='fill' color='#FFFF'/>
                    </div>
                    <div className={styles.localText}>
                        <span> Entrega em Rua João Daniel Martinelli, 102</span> 
                        <span> Farrapos - Porto Alegre, RS </span>
                    </div>
                </div>
                <div className={styles.time}>
                    <div className={styles.timeIcon}>
                        <Timer weight='fill' color='#FFFF'/>
                    </div>
                    <div className={styles.timeText}>
                        <p> Previsão de Entrega </p> 
                        <span> 20 min - 30 min </span>
                    </div>
                </div>
                <div className={styles.payment}>
                    <div className={styles.paymentIcon}>
                        <CurrencyDollar color='#FFFF'/>
                    </div>
                    <div className={styles.paymentText}>
                        <p> Pagamento na entrega </p> 
                        <span> Cartão de Crédito </span>
                    </div>
                </div>
            </div>
            <img src={driver} alt="Homem dirigindo uma motoneta"/>
        </div>
    )
}