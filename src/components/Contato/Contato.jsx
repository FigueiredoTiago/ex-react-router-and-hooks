import React from 'react'
import styles from './Contato.module.css';
import imagem from '../../img/contato.jpg';
import Head from '../../Hooks/Head';

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title='Contato' />
      <img src={imagem} />
      <div>
        <h1>Entre em Contato.</h1>
        <ul className={styles.dados}>
          <li>Email: contato@gmail.com</li>
          <li>Cell: 9999-9999</li>
          <li>Endereco: rua pertinho, 125c</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato