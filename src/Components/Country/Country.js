import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Country = (props) => {
    const { name, capital, flag, region, population } = props.country;
    return (
        <div className="country p-3">
            <Card style={{ width: '15rem' }}>
                <Card.Img style={{ height: '160px' }} variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Capital: {capital}</p>
                        <p>Region: {region}</p>
                        <p>Population: {population}</p>
                    </Card.Text>
                    <Link to={"/details/"+name}> <Button variant="info">Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Country;