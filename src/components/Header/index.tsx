import CoffeDeliveryLogo from '../../assets/coffeDeliveryLogo.svg'
import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react";
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header className={styles.header}>
            <NavLink to="/">
                <img src={CoffeDeliveryLogo} alt="" />
            </NavLink>
            <div className={styles.actions}>
                <NavLink to='/sucess' className={styles['actions-local']}>
                    <MapPin color="#8047F8" weight="fill" size={16}/>
                    <span> Jaú </span>
                    <span> • </span>
                    <span> SP</span>
                    {/* <span> Meu Pedido</span> */}
                </NavLink>
                <NavLink to="/checkout" className={styles['actions-cart']}> 
                    <ShoppingCartSimple color="#C47F17" weight="fill" size={22}/> 
                </NavLink>
            </div>
        </header>
    )
}