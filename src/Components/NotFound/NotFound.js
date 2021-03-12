import React from 'react';
import { Card } from 'react-bootstrap';
import Error from '../Img/error-404.png'

const NotFound = () => {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={Error} alt="Card image" />
            <Card.ImgOverlay>
                <br/> <br/> <br/> <br/>
                <Card.Title style={{fontSize:"50px"}} className="text-center">404</Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
};

export default NotFound;