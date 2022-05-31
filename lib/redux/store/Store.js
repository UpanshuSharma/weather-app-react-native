import { createStore,applyMiddleware,combineReducers } from "redux";
import  ThunkMiddleware  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//.................................................................
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
//.....................................

import {locationReducer} from '../reducers/locationReducer';
import {searchReducer} from '../reducers/searchReducer';
import {weatherReducer} from '../reducers/weatherReducer';
import { favReducer } from "../reducers/favReducer";

//.......................................
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['myLocationWeather']    on writing this line , only this state persist in asynStorage . By default all state persist.
  };
//....................
const composedEnhancer=composeWithDevTools(applyMiddleware(ThunkMiddleware));

const rootReducer=combineReducers({
    myCurrentLocationInfo:locationReducer,
      myLocationWeather:weatherReducer,
      searchHistory:searchReducer,
      fav:favReducer,
});

//...........................
const persistedReducer = persistReducer(persistConfig, rootReducer)
//..............
const initialState={
    myCurrentLocationInfo:[],
    myLocationWeather:[],
    searchHistory:[],
    fav:[]

}


// const store=createStore(rootReducer, initialState, composedEnhancer)
export const store=createStore(persistedReducer, initialState, composedEnhancer);
export const persistor = persistStore(store);


// export default {store,persistor};
