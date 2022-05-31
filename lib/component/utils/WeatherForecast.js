import React from 'react';
import {View,Text,ScrollView,Image,StyleSheet} from 'react-native';

import WeatherCard from './WeatherCard';
import { useSelector } from 'react-redux';


const WeatherForcastComp =({weatherData})=>{
    // const weatherData=useSelector(state=>state.myLocationWeather)
    // console.log("Today",weatherData.current)
    return(
       <ScrollView horizontal={true} style={styles.main} contentContainerStyle={styles.contentContainer}>
           
            
         
              {  
              (weatherData.daily).map((data,index)=>{
                  return(
                      <WeatherCard key={index} data={data}/>
                  )
              })
            
           }
       </ScrollView>
    )
}


const styles=StyleSheet.create({
    main:{
        backgroundColor:'#18181b99',
        padding:30,
        flex:0.4,
        
    },
    contentContainer: {
        // marginHorizontal:10,
        paddingHorizontal:25,
        
      }
    

})
export default WeatherForcastComp;