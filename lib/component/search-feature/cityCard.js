import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

import WeatherItemComponent from '../utils/WeatherItem';
import moment from 'moment-timezone';
import {addToFav, removeFromFav} from '../../redux/actions/favAction';

const CityCardComponent = ({data}) => {
  const favPlaces = useSelector(state => state.fav);
  const dispatch = useDispatch();
  const [FABaction, setFABAction] = useState('');

  const setUpFAB = () => {
    let requireCity = favPlaces.find(
      dt => dt.name.toLowerCase() === data.name.toLowerCase(),
    );
    if (requireCity) {
      let fabAction = {
        icon: 'minus',
        label: 'UnMark Fav',
        color:'#f5ceef',
        action: () => {
          let requireCity = favPlaces.find(dt => dt.name === data.name);
          dispatch(removeFromFav(requireCity.id));
        },
      };
      return fabAction;
    } else {
      let fabAction = {
        icon: 'plus',
        label: 'Mark Fav',
        color:'#c6e2ff',
        action: () => {
          let requireData = {
            name: data.name,
          };
          dispatch(addToFav(requireData));
        },
      };
      return fabAction;
    }
  };

  useEffect(() => {
    setFABAction(setUpFAB());
  }, [data.name, favPlaces]);

  return (
    <View style={styles.main}>
      <Text style={styles.header}>{data.name}</Text>

      <FAB
        label={FABaction.label}
        style={[styles.fab, {backgroundColor:FABaction.color}]}
        icon={FABaction.icon}
        onPress={() => FABaction.action()}
      />
      <View style={styles.mainContainer}>
        <View style={styles.weatherDetails}>
          <WeatherItemComponent
            title={'Humidity'}
            unit={'%'}
            value={data.main.humidity}
          />
          <WeatherItemComponent
            title={'Pressure'}
            unit={'hPA'}
            value={data.main.pressure}
          />
          <WeatherItemComponent
            title={'sea-level'}
            unit={'m'}
            value={data.main.sea_level}
          />
          <WeatherItemComponent
            title={'ground_level'}
            unit={'m'}
            value={data.main.grnd_level}
          />
          <WeatherItemComponent title={'wind-speed'} unit={'%'} value={20} />
        </View>
        <View style={styles.locationDetails}>
          <WeatherItemComponent
            title={'latitute'}
            unit={'N'}
            value={data.coord.lat}
          />
          <WeatherItemComponent
            title={'longitute'}
            unit={'E'}
            value={data.coord.lon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 15,
    margin: 15,
    paddingRight: 10,
  },
  header: {
    fontSize: 25,
    color: 'white',
  },

  mainContainer: {
    //   flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  weatherDetails: {
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    // width: 200,
    // height: 200,
    margin: 10,
    padding: 20,
    backgroundColor: '#18181b99',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  locationDetails: {
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    // width: 150,
    // height: 150,
    margin: 10,
    padding: 20,
    backgroundColor: '#18181b99',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  fab: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 12,
    right: 0,
    top: 0,
    fontSize: 7,
    padding: 0,
    width:130,
  },
});
export default CityCardComponent;
