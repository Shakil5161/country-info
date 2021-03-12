import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Countries from '../Countries/Countries';
import NotFound from '../NotFound/NotFound';

const SearchCountry = () => {
    const { searchCountry } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
        .then(res => res.json())
        .then(data => setCountry(data))
      },[searchCountry]);
    console.log('search country',country);
    return (
        <div>
            {
                country.status === 404 ? <NotFound></NotFound>:<Countries countries={country}></Countries>
            }
        </div>
    );
};

export default SearchCountry;