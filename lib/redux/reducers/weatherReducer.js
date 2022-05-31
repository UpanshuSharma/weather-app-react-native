
export function  weatherReducer (state=[],action){
    let {type}=action;
    switch(type){
        case 'SET_CURRENT_LOC_WEATHER':
             let {payload}=action;
             state=payload;
             return state;
             
        default:
             return state;
    }
}