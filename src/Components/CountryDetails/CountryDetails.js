import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [countryName])
    const { name, capital, flag, region, population, area, timezones, callingCodes, topLevelDomain, currencies } = country;
    console.log(country);

    return (
        <div className="fluid">
            <div className="container text-center">
                <Image src={flag} fluid />
                <div className="text-left">
                    <h4 className="text-center p-2">{name}</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item ><b>Capital:</b> {capital}</ListGroup.Item>
                        <ListGroup.Item ><b>Region:</b> {region}</ListGroup.Item>
                        <ListGroup.Item ><b>Population:</b> {population} People</ListGroup.Item>
                        <ListGroup.Item ><b>Language: </b>{country.languages?.length > 0 ? country.languages.map(language => <span>"{language.name}"({language.nativeName}),</span>) : ''}</ListGroup.Item>
                        <ListGroup.Item ><b>Currency: </b>{currencies?.map(currency => <span>"{currency.name}"({currency.symbol}),</span>)}</ListGroup.Item>
                        <ListGroup.Item ><b>Area: </b>{area} Square KM</ListGroup.Item>
                        <ListGroup.Item ><b>Calling Codes: </b>"{callingCodes}" </ListGroup.Item>
                        <ListGroup.Item ><b>Top Level Domain: </b>"{topLevelDomain}"</ListGroup.Item>
                        <ListGroup.Item className="overflow-auto" ><b>Time Zones: </b>{timezones?.map(time => <span>"{time}",</span>)}</ListGroup.Item>
                        <ListGroup.Item className="overflow-auto"><b>Borders: </b>{
                            country.borders?.length > 0 ? country.borders.map(border => <span >"{border}",</span>) : '0 Border'
                        }</ListGroup.Item>
                        <ListGroup.Item ></ListGroup.Item>
                    </ListGroup>
                    <div className="text-center"><Link to={"/"}> <Button variant="info">All Country</Button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;