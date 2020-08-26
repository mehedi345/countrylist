import React from 'react';
import './Country.css';

const Country = (props) => {

    const {flag , name, population, region} = props.country;
    return (
        <div className = "country-container">
            <div>
                <img className="country-img" src={flag} alt={name}/>
            </div>
            <div>
                <h1>name: {name}</h1>
                <p>
                    <small>population: {population}</small>
                </p>
                <p>
                    <small>Region: {region}</small>
                </p>
                <button onClick={()=> props.handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;