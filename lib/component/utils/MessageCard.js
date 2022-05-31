import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';



//.....................................
const ERROR_MESSAGE=(<MaterialIcons name="error-outline"   size={50} color={'white'}/>)
const WARNING_MESSAGE=(<AntIcons name="warning" size={50}  color={'white'}/>)
const SEARCH_MESSAGE=(<AntIcons name="search1" size={50}  color={'white'}/>)
const DEFAULT_MESSAGE=(<EntypoIcons name="emoji-sad" size={50}  color={'white'}/>)
const renderIcons=(type)=>{
    switch(type){
        case 'ERROR_MESSAGE': 
               return ERROR_MESSAGE;
        case 'WARNING_MESSAGE':
              return WARNING_MESSAGE;
        case 'NO_DATA_FOUND':
              return SEARCH_MESSAGE;
        default:
             return  DEFAULT_MESSAGE;
    }
}
//.....................................

const MessageCardComp=({type,msg})=>{
    return(
        <View style={styles.main}>
                 {
                     renderIcons(type)
                 }
              <Text style={styles.text}>{msg}</Text>
        </View>
    )
}


const styles=StyleSheet.create({
main:{
     marginTop:'50%',
     marginLeft:'auto',
     marginRight:'auto',
     backgroundColor:'black',
     padding:20,
     alignItems:'center',
     borderRadius:20,
    //  width:'60%'
},
icon:{
   fontSize:50,
   color:'pink',
   fontWeight:'700',
},
text:{
    color:'white',
    marginTop:10,
    fontWeight:'700',
    fontSize:25,
},

});
export default MessageCardComp;