import { useState, useCallback } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const request = useCallback(
        async (url, options) => {
            let response;
            let json;
            try {
                setError(null);
                setLoading(true);

                response = await fetch(url, options);
                json = await response.json();

                setLoading(false);
            } catch (erro) {
                json = null;
                setError("Ops...Aconteceu um Erro!!");
            } finally {
                //salvamos os dados aqui inves de la na funcao request, pra ele sempre setar os dados como json, caso der erro, la no catch ele seta os json como null.
                setData(json);
                setLoading(false);
                return { response, json }
                //estamos retornando esses dois pq eles podem ser util dps.
            }
        }, []
    );

    return { data, error, loading, request };
}

export default useFetch;

//essa funcao e para solicitar dados de uma api usando fetch.
//para usar vc deve importar esse custom hook da segunte forma: 

//const { request, data, loading, error } = useFetch();

//todos esses parametros dentro dos {} e oque iremos usar, o unico que recebe algo e o request, pq ela ea funcao que recebe a url da API, o restante usamos so para exibir.