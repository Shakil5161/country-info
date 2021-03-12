import React from 'react';
import Country from '../Country/Country';

const Countries = (props) => {
    const countries = props.countries;
    return (
        <div className="container countries ">
            <h4 className="text-center p-2"><u>Total Country: {countries.length}</u></h4>
            <div className="row d-flex justify-content-center align-items-center">
                {
                    countries?.length > 0 ? countries.map(country => <Country key={country.alpha3Code} country={country}></Country>):''
                }
            </div>
        </div>
    );
};

export default Countries;