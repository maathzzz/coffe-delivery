import { MapPinLine } from '@phosphor-icons/react'
import styles from './LocationForm.module.css'

export function LocationForm() {
  return (
    <div className={styles.locationForm}>
        <div className={styles.locationTitle}>
            <MapPinLine />
            <p> Endereço de Entrega </p>
            <span> Informe o endereço onde deseja receber seu pedido </span>
        </div>

        <form>
            <input type='number' placeholder='CEP'/> <br />

            <input type='text' placeholder='Rua'/>

            <div>
                <input type='number' placeholder='Número'/>
                <input type='text' placeholder='Complemento'/>
            </div>
            <div>
                <input type='text' placeholder='Bairro'/>
                <input type='text' placeholder='Cidade'/>
                <input type='text' placeholder='UF'/>
            </div>
        </form>
    </div>
  )
}
