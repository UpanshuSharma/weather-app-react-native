import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const WeatherItemComponent=({title,value,unit})=>{
    return(
        <View style={styles.weatherItemContainer}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemValue}>{value} {unit}</Text>
        </View>
    )
 }

 const styles=StyleSheet.create({

    weatherItemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    itemTitle:{
     fontSize:16,
     color:'white',
     fontWeight:'600',
    },
    itemValue:{
        fontSize:14,
        // color:'white',
        color:'yellow',
        fontWeight:'600',
        
    }
})
 export default WeatherItemComponent;