import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import HeaderComponent from './Header';
import WeatherForcastComp from '../utils/WeatherForecast'
import {getForecast} from '../../api/WeatherAPI'; // showing error - unhandle promise promise(id:0)

// ....................................................
import {getLiveLocation} from '../../redux/actions/locationAction';
import {getCurrentLocationWeather} from '../../redux/actions/weatherAction';
import {useDispatch, useSelector} from 'react-redux';

//........................................................

// const img = require('../assest/images/weather.png');
const img=require('../../assest/images/weather1.png');

const MainComp = () => {

  const dispatch = useDispatch();
  const locationInfo = useSelector(state => state.myCurrentLocationInfo);
  // console.log('LocationInfo: ', locationInfo);
// const locatlity=locationInfo.locatlity;
  const weatherData = useSelector(state => state.myLocationWeather);
  // console.log('weatherdata: ', weatherData);
  const [postalInfo, setPostalInfo] = useState('');

  const getLocationDetails = () => {
    dispatch(getLiveLocation());

    if (locationInfo.position) {
      dispatch(
        getCurrentLocationWeather(
          locationInfo.position.lat,
          locationInfo.position.lng,
        ),
      );
    }
  };

  useLayoutEffect(() => {
    getLocationDetails();
    

    /*                       
            *   Error Promise unhandle Promise (Id:0)
            *

           let result= getForecast(coords)
           console.log('result',result);
            .then(res=>res.json())
               .then(info=>{
                  //  console.warn("Line 20: ",info);
                    setWeatherData(info);
               }
             )
          .catch(error=>{
            console.warn('Error occurs');
            console.log("Error: ---> ",error)
          })
           */
  }, [locationInfo.locality]);

  return (
    <View>
      <ImageBackground source={img} style={styles.img}>
        {Object.keys(weatherData).length !=0 ? 
           <>
           <HeaderComponent />
           <WeatherForcastComp weatherData={weatherData}/>
           </>
         :
         <ActivityIndicator  size="large" color='black' style={styles.activityIndicator}/>
      }
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  activityIndicator:{
      // marginHorizontal:'50%',
      marginTop:400,
  }
});
export default MainComp;
