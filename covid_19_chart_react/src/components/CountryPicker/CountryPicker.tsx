import React,{useState,useEffect,ChangeEvent} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from  '../../api';
import styles from './Country.module.css';

interface CountryProp{
    handleCountry:handleCountry;
}

export const CountryPicker:React.FC<CountryProp>=({handleCountry})=>{
    //console.log(handleCountry);
    const [fetchCountry,setFetchCountry]=useState([]);
    useEffect(()=>{
        (async()=>{
            const fetchDataRes=await fetchCountries();
            setFetchCountry(await fetchDataRes);
        })()
    },[setFetchCountry]);

    const handleCountries=(e:ChangeEvent<HTMLSelectElement>)=>{
        handleCountry(e.target.value);
    }

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={handleCountries}>
                <option value=""> Global</option>
                {fetchCountry.map((country,i)=>{
                    return <option key={i} value={country}> {country}</option>
                })}
            </NativeSelect>
        </FormControl>
    )
};