import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import NotFound from './Components/NotFound/NotFound';
import Countries from './Components/Countries/Countries';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Region from './Components/Region/Region';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import SearchCountry from './Components/SearchCountry/SearchCountry';
import Footer from './Components/Footer/Footer';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[]);
  console.log(countries);
  return (
    <div> 
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Countries countries={countries}></Countries>
          </Route>
          <Route path="/home">
            <Countries countries={countries}></Countries>
          </Route>
          <Route path="/region/:regionId">
            <Region></Region>
          </Route>
          <Route path="/details/:countryName">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="/search/:searchCountry">
            <SearchCountry></SearchCountry>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
