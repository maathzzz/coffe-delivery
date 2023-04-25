import CoffeDeliveryLogo from '../../assets/coffeDeliveryLogo.svg'
import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react";
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header className={styles.header}>
            <NavLink to="/">
                <img src={CoffeDeliveryLogo} alt="" />
            </NavLink>
            <div className={styles.actions}>
                <div className={styles['actions-local']}>
                    <MapPin weight="fill" size={16}/>
                    <span> Jaú </span>
                    <span> • </span>
                    <span> SP</span>
                </div>
                <NavLink to="/checkout" className={styles['actions-cart']}> 
                    <ShoppingCartSimple color="#C47F17" weight="fill" size={22}/> 
                </NavLink>
            </div>
        </header>
    )
}