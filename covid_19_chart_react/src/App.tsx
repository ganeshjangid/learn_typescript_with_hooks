import React, { useEffect, useState } from 'react';
import { Cards,Charts,CountryPicker } from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronoImg from './images/corona.png';

const App=()=>{
    const [cardData,setCardData]=useState({confirmed:{},deaths:{},recovered:{},lastUpdate:""});
    const [country,setCountry]=useState("");

    useEffect(()=>{
        (async ()=>{
            const {confirmed,recovered,deaths,lastUpdate}:CardsInt=await fetchData();
            setCardData({confirmed,recovered,deaths,lastUpdate});
        })();
    },[]);

    const handleCountries:handleCountry=async(country:string)=>{
        const {confirmed,recovered,deaths,lastUpdate}:CardsInt=await fetchData(country);
        setCardData({confirmed,recovered,deaths,lastUpdate});
        setCountry(country);
    }

    return(
        <div className={styles.container}>
            <img src={coronoImg} className={styles.image} alt="COVID-19" />
            <Cards data={cardData}  /> 
            <CountryPicker handleCountry={handleCountries} />   
            <Charts data={cardData} country={country}/>   
            
        </div>   
    )
};

export default App;