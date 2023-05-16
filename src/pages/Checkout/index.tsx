import { CartContainer } from './components/CartContainer'
import styles from './Checkout.module.css'
import { LocationForm } from './components/LocationForm/index'
import { PaymentForm } from './components/PaymentForm'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form';

const confirmOrderValidationSchema = zod.object({
    cep: zod.string(),
})

export function Checkout() {
    const [isFirstRender, setIsFirstRender] = useState(true)
    const { cartQuantity } = useCart();

    const confirmOrderForm = useForm({
        resolver: zodResolver(confirmOrderValidationSchema),
    })

    // const { handleSubmit } = confirmOrderForm;

    const notify = () => {
        toast.error('☕ Café removido do carrinho', {
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
    }, [cartQuantity])
    
    return (
        <FormProvider {...confirmOrderForm}>
            <div className={styles.checkout}>
                <ToastContainer />
                <div className={styles.child}>
                    <div className={styles.block}>
                        <h2> Complete seu pedido </h2>
                        <LocationForm/>
                        <PaymentForm />
                    </div>
                    <div className={styles.block}>
                        <h3> Cafés selecionados:</h3>
                        <CartContainer />
                    </div> 
                </div>
            </div>
        </FormProvider>
    )
}