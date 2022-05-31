import React, { useState } from 'react';
import {View, Text,FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import AntIcons from 'react-native-vector-icons/AntDesign';
import {Badge} from 'react-native-paper'

import MessageCardComp from '../utils/MessageCard';
import {removeSearchFromHistory} from '../../redux/actions/searchAction'

const SearchHistoryComp = () => {
    const dispatch=useDispatch();
    const searchHistory= useSelector(state=>state.searchHistory)
    const [selectedId, setSelectedId] = useState(null);


    const Item = ({ name ,index,id, time,onPress,backgroundColor,textColor}) => {
      const handleDelete=(id)=>{
        dispatch(removeSearchFromHistory(id))
      }
      return(
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
                        <Badge size={35}>{index}</Badge>
                        <Text style={[styles.title,textColor]}>{name}</Text>
                        <Text style={[styles.time,textColor]}>{time}</Text>
                        <AntIcons name="delete" size={35} color={"red"} onPress={()=>handleDelete(id)} />
              
        </TouchableOpacity>
      )};

    const renderItem = ({ item ,index}) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';
        return(
            <Item
            id={item.id} 
            index={index}
            name={item.name} 
            time={item.date} 
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
         />
        )
    };
    
  const renderFavList = () => {
    return (
      <FlatList
        data={searchHistory}
        renderItem={renderItem}
        keyExtractor={(item,index )=> {
          item.id;
          index.toString();
        }}
        extraData={selectedId}
      />
    );
  };
  return (
    <View>
      <Text style={styles.text}>Recent Search</Text>
      {searchHistory.length === 0 ? (
        <MessageCardComp
          type={'NO_DATA_FOUND'}
          msg={'No Search Found'}
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
      alignItems:'flex-start',
      borderRadius:10,
    },
    title: {
      fontSize: 25,
    },
    time: {
        fontSize: 20,
        //  color:'pink'
      },
  });

export default SearchHistoryComp;
