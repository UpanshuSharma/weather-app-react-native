import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import moment from 'moment-timezone';

//..................................................................
import {pushSearchHistory} from '../../redux/actions/searchAction';
import CityCardComp from './cityCard';
import Wcard from './weatherCard';
//..................................................................


const img = require('../../assest/images/weather1.png');

const SearchComponent = () => {
  const dispatch=useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  //...........................................................................................................
  const [cityData, setCityData] = useState('');
  const [errors, setErrors] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
 

  //............................................................................................................
  const onPressHandle = () => {
    setIsSearch(true);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=041d6d2bc2c3c28f692583f15a42a742&units=metric`,
    )
      .then(res => res.json())
      .then(info => {
        setCityData(info);
        setIsSearch(true);
        let data = {
          name: searchQuery,
          date: moment(info.dt * 1000).format('MMMM Do YYYY'),
        };
        dispatch(pushSearchHistory(data));
    
      })
      .catch(error => {
        console.log('Error! at,fetch at(search.js):', error);
        setErrors(error);
      });
  };

  //.................................................................................................................

  const renderItems = () => {
    if (isSearch) {
      if (Object.keys(cityData).length != 0) {
        return (
          <>
            <CityCardComp data={cityData} />
            <Wcard data={cityData} />
          </>
        );
      } else {
        return (
          <>
            <ActivityIndicator
              size="large"
              color="black"
              style={styles.activityIndicator}
            />
          </>
        );
      }

      // if(errors){
      //    return(
      //      <Text>Errors {errors}</Text>
      //    )
      // }
    } else {
      return <></>;
    }
  };

  //.............................................................................................................
  return (
    <View>
      <ImageBackground source={img} style={styles.img}>
        <Searchbar
          placeholder="Search city/town"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onIconPress={onPressHandle}
          style={styles.searchBar}
          inputStyle={styles.input}
        />

        {renderItems()}
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
  searchBar: {
    backgroundColor: '#18181b99',
    color: 'white',
  },
  input: {
    color: 'white',
  },
  activityIndicator: {
    // marginHorizontal:'50%',
    marginTop: 400,
  },
});

export default SearchComponent;
