import API_Key from '../../api/API_KEY'

 function setCurrentLocationWeather(info){
     let action={type:'SET_CURRENT_LOC_WEATHER',payload:info}
     return action;
}

export function getCurrentLocationWeather(lat,lon){
    if(lat & lon){
         return(dispatch)=>{

            fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`)
            // fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=27.8974&lon=78.0880&appid=${API_Key}&units=metric`)
            .then(res=>res.json())
               .then(info=>{
                        dispatch(setCurrentLocationWeather(info))
               })
             .catch(error=>{
               console.log("Error! at, getCurrentLocationWeather-(weatherAction):",error)
             })
  
         }
   }
}