import { useState } from 'react';
import { MapPinLine } from '@phosphor-icons/react';
import styles from './LocationForm.module.css';
import { useFormContext } from 'react-hook-form';

export function LocationForm() {
  const { register } = useFormContext();

  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: ''
  });

  async function handleBlur() {
    if (!cep) {
      return;
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    setAddress({
      street: data.logradouro || '',
      number: '',
      complement: data.complemento || '',
      neighborhood: data.bairro || '',
      city: data.localidade || '',
      state: data.uf || ''
    });
  }

  function handleChange(event: any) {
    const { name, value } = event.target;

    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value
    }));
  }

  return (
    <form className={styles.locationContainer}>
      <div className={styles.locationTitle}>
        <MapPinLine color="#C47F17" size={22} />
        <div>
          <p> Endereço de Entrega </p>
          <span> Informe o endereço onde deseja receber seu pedido </span>
        </div>
      </div>

      <div className={styles.locationForm}>
        <div className={styles.locationCep}>
          <input
            type="text"
            placeholder="CEP"
            value={cep}
            {...register('cep')}
            onChange={event => setCep(event.target.value)}
            onBlur={handleBlur}
            className={styles.inputOne}
          />
        </div>

        <input
          type="text"
          placeholder="Rua"
          name="street"
          value={address.street}
          onChange={handleChange}
          className={styles.inputTwo}
        />

        <div className={styles.locationForm2}>
          <input
            type="number"
            placeholder="Número"
            name="number"
            value={address.number}
            onChange={handleChange}
            className={styles.inputOne}
          />
          <input
            type="text"
            placeholder="Complemento (Opcional)"
            name="complement"
            value={address.complement}
            onChange={handleChange}
            className={styles.inputThree}
          />
        </div>

        <div className={styles.locationForm3}>
          <input
            type="text"
            placeholder="Bairro"
            name="neighborhood"
            value={address.neighborhood}
            onChange={handleChange}
            className={styles.inputOne}
          />
          <input
            type="text"
            placeholder="Cidade"
            name="city"
            value={address.city}
            onChange={handleChange}
            className={styles.inputFour}
          />
          <input
            type="text"
            placeholder="UF"
            name="state"
            value={address.state}
            onChange={handleChange}
            className={styles.inputFive}
          />
        </div>
      </div>
    </form>
  );
}
