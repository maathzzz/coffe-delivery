import styles from './Home.module.css'
import coffeHome from '../../assets/coffeHome.png'

export function Home() {
    return (
        <div className={styles.intro}>
            <div className={styles.title}>
                <h1>Encontre o café perfeito para qualquer hora do dia.</h1>
                <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</h3>
            </div>
            <img className={styles.imagem} src={coffeHome} alt ="" />
        </div>

    )
}