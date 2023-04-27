import { CoffeeCard } from './CoffeeCard/CoffeeCard'

import styles from './Home.module.css'
import coffeHome from '../../assets/coffeHome.png'
import { Coffee, Package, ShoppingCartSimple, Timer } from '@phosphor-icons/react'
import { coffees } from '../../data/coffee'


export function Home() {
    return (
        <div className={styles.intro}>
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
                            <div> 
                                <CoffeeCard
                                    key={coffee.id}
                                    title={coffee.title}
                                    description={coffee.description}
                                    price={coffee.amount}
                                    tags={coffee.tags} 
                                    imgUrl={coffee.img}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}