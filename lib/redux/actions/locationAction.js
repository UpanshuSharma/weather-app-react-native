import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoder';


function setLocationInfo(locationInfo,dispatch){
       let action={type:'SET_LIVE_LOCATION',payload:locationInfo[0]} ;
       dispatch(action);
}

export  function getLiveLocation(){
    return(dispatch)=>{
         Geolocation.getCurrentPosition(
             data=>{
                        Geocoder.geocodePosition({lat:data.coords.latitude,lng:data.coords.longitude}).then(
                            // Geocoder.geocodePosition({lat:27.8974,lng:78.0880}).then(    
                        locationInfomation=>{
                               setLocationInfo(locationInfomation,dispatch)
                        })
                        .catch(error=>{
                            console.log("Error! at, Geocoder-(locationAction): ",error);
                        })  
             },
             error=>{
                 console.log("Error! at, getLiveLocation-(locationAction): ", error)
             },
             {enableHighAccuracy: true, timeout: 200000000, maximumAge: 1000},
         )
    }
}


export function getCurrentLocation(){

}