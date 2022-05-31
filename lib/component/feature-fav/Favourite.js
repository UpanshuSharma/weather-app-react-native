import React, { useState } from 'react';
import {View, Text,FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import {Badge} from 'react-native-paper'
import AntIcons from 'react-native-vector-icons/AntDesign';
import {useDispatch,useSelector} from 'react-redux';

import MessageCardComp from '../utils/MessageCard';
import { removeFromFav } from '../../redux/actions/favAction';

const FavComp = () => {

    const [selectedId, setSelectedId] = useState(null);
    const dispatch=useDispatch();
    const favPlaces=useSelector(state=>state.fav);


    const Item = ({ name,index,id,time,onPress,backgroundColor,textColor}) => {

      const handleDelete=(id)=>{
        dispatch(removeFromFav(id))
      }
       return(
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
                        <Badge size={35}>{index}</Badge>
                        <Text style={[styles.title,textColor]}>{name}</Text>
                        <Text style={[styles.time,textColor]}>{time}</Text>
                        <AntIcons name="delete" size={35} color={"red"} onPress={()=>handleDelete(id)} />
              
        </TouchableOpacity>
       )
    };


    const renderItem = ({ item,index }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';
        return(
            <Item 
            index={index}
            id={item.id}
            name={item.name} 
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
         />
        )
    };
    
  const renderFavList = () => {
    return (
      <FlatList
        data={favPlaces}
        renderItem={renderItem}
        keyExtractor={(item,index )=> {
          item.id;
          index.toString()
        }}
        extraData={selectedId}
      />
    );
  };
  return (
    <View>
      <Text style={styles.text}>Fav Component</Text>
      {favPlaces.length === 0 ? (
        <MessageCardComp
          type={'NO_DATA_FOUND'}
          msg={'No favourite place found'}
        />
      ) : (
        renderFavList()
      )}
    </View>
  );
};
const styles = StyleSheet.create({
   text:{
     fontSize:30,
     color:"black",
     fontWeight:'700',
     textAlign:'center',
     padding:10,
   },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flex:1,
      flexDirection:"row",
      justifyContent:'space-between',
      borderRadius:10,
    },
    title: {
      fontSize: 32,
    },
    time: {
        fontSize: 32,
      },
  });

export default FavComp;
