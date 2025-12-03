
import React from 'react';
import { useEffect, useState } from "react";

const usePetData = () => {
    const [pets, setPets] = useState();
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('../pet.json')
            .then(res => res.json())
            .then(data => setPets(data))
            .catch(error => setError(error))
            .finally(()=>setLoader(false))
    }, [])

    return {pets,loader,error}

};

export default usePetData;



