import CoffeDeliveryLogo from '../../assets/coffeDeliveryLogo.svg'
import { ShoppingCartSimple, CurrencyDollar } from "@phosphor-icons/react";
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';


export function Header() {
    const { cartQuantity, cartItemsTotal } = useCart();

    const formattedItems = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' }).format(cartItemsTotal)

    return (
        <header className={styles.header}>
            <NavLink to="/">
                <img src={CoffeDeliveryLogo} alt="" />
            </NavLink>
            <div className={styles.actions}>
                <div className={styles['actions-local']}>
                    {/* <MapPin color="#8047F8" weight="fill" size={16}/> */}
                    <CurrencyDollar size={20} color="#4B2995"/>
                    <span> { formattedItems }</span>
                </div>
                <NavLink to="/checkout">
                    <button className={styles['actions-cart']}>
                            <span> {cartQuantity} </span>
                            <ShoppingCartSimple color="#C47F17" weight="fill" size={22}/> 
                    </button>
                </NavLink>
            </div>
        </header>
    )
}