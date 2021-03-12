import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Countries from '../Countries/Countries';


const Region = () => {
    const {regionId}=useParams();
    const [region, setRegion] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/region/'+regionId)
            .then(res => res.json())
            .then(data => setRegion(data));
    }, [regionId])
    return (
        <Countries countries={region}></Countries>
    );
};

export default Region;