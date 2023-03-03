import React, { useState, useEffect } from 'react';


const useLocalStorage = (key, inicial) => {
    const [state, setState] = useState(() => {
        const local = window.localStorage.getItem(key);
        return local ? local : inicial;
    });

    //cada vez que um item e passado, o effect e iniciado e salva ele no local storage.
    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state, key]);


    return [state, setState];
}

export default useLocalStorage;