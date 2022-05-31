import React from 'react';
import {View,Text,ScrollView,Image,StyleSheet} from 'react-native';
import moment from 'moment-timezone';
const  Wcard=({data})=>{
    const img={uri:`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}

    return(
        <View style={styles.card}>
           <Image
             source={img} 
             style={styles.icon}
           />
           <View style={styles.subContainer}>
               <Text style={styles.date}>{moment(data.dt *1000).format('MMMM Do YYYY')}</Text>
               <Text style={styles.day}>{moment(data.dt *1000).format('dddd')}</Text>
               <Text style={styles.temp}>Description- {data.weather[0].main}</Text>
               <Text style={styles.temp}>Max Temp- {data.main.temp_max} &#8451;</Text>
               <Text style={styles.temp}>Min Temp - {data.main.temp_min} &#8451;</Text>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    
    card:{
       flexDirection:"row",
       backgroundColor:'#00000033',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:10,
       borderColor:'#eee',
       borderWidth:2,
       padding:15,
       margin:15,
    //    marginRight:10,
    //   marginHorizontal:2,
    paddingRight:10,
    },
    icon:{
        width:150,
        height:150
    },
    subContainer:{
      paddingRight:40,

    },
    day:{
        fontSize:20,
        color:'white',
        backgroundColor:'#50dfb3',
        padding: 5,
        textAlign:'center',
        borderRadius:10,
        fontWeight:'500',
        marginBottom:15,
    },
    date:{
        fontSize:18,
        color:'yellow',
        backgroundColor:'#363644',
        padding: 10,
        textAlign:'center',
        borderRadius:10,
        fontWeight:'500',
        marginBottom:15,
    },
    temp:{
        fontSize:16,
        color:'white',
        fontWeight:'500',
        textAlign:'center',
    }

})
export default Wcard;