import React ,{useEffect,useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';

import WeatherItemComponent from '../utils/WeatherItem';
// ...............................................................................................
const days=['SUN','MON','TUE','WED','THU','FRI','SAT'];
const months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
//................................................................................................




const HeaderComponent=()=>{
    // console.log("city name",locationData.name);
     const locationInfo=useSelector(state=>state.myCurrentLocationInfo);
     const weatherData=useSelector(state=>state. myLocationWeather)
     const [date,setDate]=useState('');
     const [time,setTime]=useState('');
    
     useEffect(()=>{
       setInterval(()=>{
        const dateObj=new Date();
        const month=dateObj.getMonth();
        const currentDate=dateObj.getDate();
        const currentDay=dateObj.getDay();
        const hour=dateObj.getHours();
        const hoursIn12HrFormat=hour >=13 ? hour%12 :hour;
        const minute=dateObj.getMinutes();
        const AMPM=hour>=12?'PM':'AM';

        setTime((hoursIn12HrFormat <10 ? '0'+hoursIn12HrFormat : hoursIn12HrFormat)+':'+(minute <10 ? '0'+minute : minute )+':'+AMPM)
        setDate(days[currentDay]+" "+currentDate+" "+months[month])
       },1000)

     },[]);

    return(
        <View style={styles.main}>
             <View>
                   <View>
                        <Text style={styles.time}>{time}</Text>
                   </View>
                   <View>
                        <Text style={styles.date}>{date}</Text>
                  </View>
                  
                    <View style={styles.weatherContainer}>
                       <WeatherItemComponent title="wind speed" value={weatherData.current.wind_speed} unit="m/s"/>
                       <WeatherItemComponent title="Humidity" value={weatherData.current.humidity} unit="%"/>
                       <WeatherItemComponent title="Pressure" value={weatherData.current.pressure} unit="hPA"/>
                       <WeatherItemComponent title="Sunrise" value={moment.tz(weatherData.current.sunrise *1000,weatherData.timezone).format('HH:MM')} unit="AM"/>
                       <WeatherItemComponent title="Sunset" value={moment.tz(weatherData.current.sunset *1000,weatherData.timezone).format('HH:MM')} unit="PM"/>
                  </View>
              


            </View>
            <View style={styles.location}> 
              
                   <Text style={styles.place}>{locationInfo.locality}</Text>
                <Text style={styles.coords}>{(locationInfo.position.lat).toFixed(2)}N&nbsp;&nbsp;{(locationInfo.position.lng).toFixed(2)}E</Text>
             
            </View>
        
        </View>
    )
}


const styles=StyleSheet.create({
    main:{
        padding:15,
       flex:1.5,
       flexDirection:'row',
       justifyContent:"space-between"
    },
    time:{
         fontSize:45,
         color:'white',
         fontWeight:'400',
    },
    date:{
        fontSize:25,
        color:'#eee',
        fontWeight:'400',   
    },
    location:{
        textAlign:'right',
        marginTop:20,
    },
    place:{
       fontSize:20,
       color:'white',
    },
    coords:{
        fontSize:15,
        color:'#eee',
        fontWeight:'700'
    },
    weatherContainer:{
        backgroundColor:"#18181b99",
        borderRadius:10,
        padding:15,
        marginTop:20,
    
   },

})
export default HeaderComponent;