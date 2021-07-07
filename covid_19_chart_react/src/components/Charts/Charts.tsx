import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';

import styles from './Charts.module.css';


interface ChartsProp{
    data:CardsInt;
    country:string;
}

export const Charts:React.FC<ChartsProp>=({data,country}:any)=>{
    const {confirmed,deaths,recovered}=data;
    const [dailyData,setDailyData]=useState([]);

    useEffect(()=>{
        (async ()=>{
            const fetchDataRes=await fetchDailyData();
            setDailyData(fetchDataRes);
        })();   
    },[]);

    const lineChart=(
        dailyData.length ? (<Line 
            data={{
                labels:dailyData.map(({ date }) =>date),
                datasets:[{
                    data:dailyData.map(({ confirmed }) =>confirmed),
                    label:"Infected",
                    borderColor:'#3333ff',
                    fill:true
                },{
                    data:dailyData.map(({ deaths }) =>deaths),
                    label:"Deaths",
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true
                }],
            }}
        />) : null
    );

    const barChart=(
        confirmed 
        ? (
            <Bar 
            data={{
                labels:['Infected','Recoverted','Deaths'],
                datasets:[{
                    label:"People",
                    backgroundColor:['blue','green','red'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current State in ${country}`}
            }}
            
            />
        )

        : null
    );

    return(
        <div className={styles.container}>
            {
               country ? barChart : lineChart
            }
        </div>

    )
};