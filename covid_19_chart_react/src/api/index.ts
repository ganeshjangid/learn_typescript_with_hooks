import axios from 'axios';
const url:string='https://covid19.mathdro.id/api';

export const fetchData=async (country="")=>{
    let changeableUrl=url;
    if(country) changeableUrl=`${url}/countries/${country}`;
    try {
        const {data:{confirmed,deaths,recovered,lastUpdate}}=await axios.get(changeableUrl);
        return {confirmed,deaths,recovered,lastUpdate};
    } catch (error) {
        console.error(error);
        return error;
    }    
}

export const fetchDailyData=async()=>{
    try {
        const {data}=await axios.get(`${url}/daily`);
        //console.log("data show==>",data);
        const modifiedData=data.map((dailyData:any)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        return modifiedData;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const fetchCountries=async()=>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`);
        //console.log("data show==>",data);
        return countries.map((country:any)=> country.name);
    } catch (error) {
        console.error(error);
        return error;
    }
};