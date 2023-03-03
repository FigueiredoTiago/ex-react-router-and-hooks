import React, {useEffect} from "react";
import styles from "./Produto.module.css";
import { useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

import Head from '../../Hooks/Head';

const Produto = () => {
  const {id} = useParams();

  const { request, data, loading, error} = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`
      );
    }
    fetchData();
  }, [id, request]);

  if(loading) return <div className="loading"></div>
  return (
    <section className={styles.produto + " animeLeft"}>

      {data && <Head title={`${data.nome}`} />}

      {error && <h1>{error}</h1>}

      <div>{data && data.fotos.map((foto) => <img key={foto.src} src={foto.src} />)}</div>

      {data && (
        <div>
          <h1>{data.nome}</h1>
          <span className={styles.preco}>R${data.preco}</span>
          <p className={styles.descricao}>{data.descricao}</p>
        </div>
      )}
    </section>
  );
};

export default Produto;
