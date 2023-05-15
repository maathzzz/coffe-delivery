import { CoffeeCard } from './CoffeeCard/CoffeeCard'
import styles from './Home.module.css'
import coffeHome from '../../assets/coffeHome.png'
import { Coffee, Package, ShoppingCartSimple, Timer } from '@phosphor-icons/react'
import { coffees } from '../../data/coffee'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'


export function Home() {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const { addCoffeeToCart } = useCart();

    const notify = () => {
        toast.success('☕ Café adicionado', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
    })};

    useEffect(() =>{
        if (isFirstRender) {
            setIsFirstRender(false);
          } else {
            notify()
          }
    }, [addCoffeeToCart])

    return (
        <div className={styles.intro}>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="colored"
            />

            <div className={styles.title}>
                <h1>Encontre o café perfeito para qualquer hora do dia.</h1>
                <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</h3>
            </div>

            <img className={styles.imagem} src={coffeHome} alt ="" />

            <div className={styles.items}>
                <div className={styles.item1}>
                    <div> <ShoppingCartSimple weight='fill' color='#FFFF'/> </div>
                    <span>Compra simples e segura</span>
                </div>
                <div className={styles.item2}>
                    <div><Timer weight='fill' color="#FFFF"/></div>
                    <span>Entrega rápida e rastreada</span>
                </div>
                <div className={styles.item3}>
                    <div> <Package weight='fill' color="#FFFF"/> </div>
                    <span>Embalagem mantém o café intacto</span>
                </div>
                <div className={styles.item4}>
                    <div><Coffee weight='fill' color="#FFFF"/></div>
                    <span>O café chega fresquinho até você</span>
                </div>
            </div>

            <div className={styles.coffeeList}>
                <h1 className={styles.coffeeListTitle}> Nossos cafés</h1>
                <div className={styles.list}>
                    {coffees.map(coffee => {
                        return (
                            <CoffeeCard
                                key={coffee.id}
                                coffee={coffee}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}