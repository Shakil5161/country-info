import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  const [search, setSearch] = useState('');
  const handleChange = event => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }
  return (
    <div >
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className=" main-menu" to="/home">Home</Link>
            <Link className=" main-menu" to="/region/africa">Africa</Link>
            <Link className=" main-menu" to="/region/asia">Asia</Link>
            <Link className=" main-menu" to="/region/americas">Americas</Link>
            <Link className=" main-menu" to="/region/europe">Europe</Link>
            <Link className=" main-menu" to="/region/oceania">Oceania</Link>
          </Nav>
          <Form inline>
            {/* <FormControl onChange={handleChange} type="text" placeholder="Search Your Country" className="mr-sm-2" />
            <Link to={"/search/"+search}><Button variant="outline-success">Search</Button></Link> */}
            <InputGroup required="required" className="m-2">
              <FormControl
                required="required"
                onChange={handleChange}
                placeholder="Search Country"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Link to={"/search/" + search}><Button variant="outline-secondary">Search</Button></Link>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

export default Header;