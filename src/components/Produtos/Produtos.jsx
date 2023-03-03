import React, {useEffect} from "react";
import styles from "./Produtos.module.css";
import useFetch from '../../Hooks/useFetch';
import { Link } from "react-router-dom";

import Head from "../../Hooks/Head";

const Produtos = () => {
  const { request, data, loading, error } = useFetch();


  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto");
    }
    fetchData();
  }, [request]);


if (loading) return <div className="loading"></div>;
if(data === null) return null;
  return (
    <section className={styles.produtos + " animeLeft"}>
      <Head title='Produtos'/>
      {data &&
        data.map((item) => (
          <Link to={`produto/${item.id}`} key={item.id}>
            <h1 className={styles.nome}>{item.nome}</h1>
            <img src={item.fotos[0].src} />
          </Link>
        ))}
    </section>
  );
};

export default Produtos;
