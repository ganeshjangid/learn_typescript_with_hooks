import React from 'react';
import { Card,CardContent,Typography,Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

interface CardsProp{
    data:CardsInt;
}
export const Cards:React.FC<CardsProp>=({data}:any): JSX.Element=>{
    const {confirmed,deaths,lastUpdate,recovered}=data;
    //console.log("Confirmed==>",confirmed);
    const cardData=[
          {nameCards:"Infected",styleName:styles.infected,data:confirmed,title:"Number of Active Cases of Covid-19"},
          {nameCards:"Recovered",styleName:styles.recovered,data:recovered,title:"Number of recoveried from Covid-19"},
          {nameCards:"Deaths",styleName:styles.deaths,data:deaths,title:"Number of deaths caused by Covid-19"}
      ]
        return (
          <div className={styles.container}>
            <Grid container spacing={3} justify="center">
              {
               cardData.map((cards)=>{
                 return (
                   <Grid
                     item
                     component={Card}
                     xs={12}
                     md={3}
                     className={cx(styles.cards, cards.styleName)}
                   >
                     <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                         {cards.nameCards}
                       </Typography>

                       <Typography variant="h5">
                        {!Object.keys(cards.data).length ? (" ..Loading") : (
                          <CountUp start={0} end={cards.data.value} duration={2.5} separator="," />
                        )}
                      </Typography>

                      <Typography color="textSecondary">
                        {!Object.keys(cards.data).length ? (" ..Loading") : (new Date(lastUpdate).toDateString())}
                      </Typography>

                      <Typography variant="body2">
                        {cards.title}
                      </Typography>

                     </CardContent>
                   </Grid>
                 );
               })
              }
            </Grid>
          </div>
        );   
};

