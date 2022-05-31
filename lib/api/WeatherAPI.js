import rootapi from "./rootAPI";
import API_Key from "./API_KEY";

export const getForecast= async(data)=>{
    return rootapi.get(`/forecast?lat=${data.lat}&lon=${data.lon}&appid=${API_Key}`)
}



export  const getCityData= async(city)=>{
    try{
    //  const res=   await rootapi.get(`/weather?q=${city}&appid=041d6d2bc2c3c28f692583f15a42a742`);
    //     const result =await   res.data;
    //     // console.log("Response:  ",result);
    //     console.log("response:  ",result);
    //     return result;
      return  await rootapi.get(`/weather?q=${city}&appid=041d6d2bc2c3c28f692583f15a42a742`);
    }
    catch(error){
        console.log("error at WeatherAPI: ",error);
        return -1;
    }
}