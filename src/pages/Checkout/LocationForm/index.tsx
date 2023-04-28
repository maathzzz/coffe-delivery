import { useState } from 'react';
import axios from 'axios';
import { MapPinLine } from '@phosphor-icons/react';
import styles from './LocationForm.module.css';

export function LocationForm() {
  const [endereco, setEndereco] = useState({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: ''
  });

  const buscarEndereco = async (cep : any) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;

      setEndereco({
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf 
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleCepChange = (event : any) => {
    const cep = event.target.value;
    setEndereco({ ...endereco, cep });
  }

  const handleCepBlur = (event : any) => {
    const cep = event.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      buscarEndereco(cep);
    }

    else if (cep.length === 0) {
        setEndereco({
            cep: '',
            logradouro: '',
            complemento: '',
            bairro: '',
            localidade: '',
            uf: ''
          });
      }
  }

  return (
    <div className={styles.locationContainer}>
      <div className={styles.locationTitle}>
        <MapPinLine color='#C47F17' size={22} />
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>

      <form className={styles.locationForm}>
        <input type='text' placeholder='CEP' className={styles.inputOne} value={endereco.cep} onChange={handleCepChange} onBlur={handleCepBlur} />
        <input type='text' placeholder='Rua' className={styles.inputTwo} value={endereco.logradouro} />

        <div className={styles.locationForm2}>
          <input type='text' placeholder='Número' className={styles.inputOne} />
          <input type='text' placeholder='Complemento (Opcional)' className={styles.inputThree} />
        </div>
        <div className={styles.locationForm3}>
          <input type='text' placeholder='Bairro' className={styles.inputOne} value={endereco.bairro} />
          <input type='text' placeholder='Cidade' className={styles.inputFour} value={endereco.localidade} />
          <input type='text' placeholder='UF' className={styles.inputFive} value={endereco.uf} />
        </div>
      </form>
    </div>
  );
}