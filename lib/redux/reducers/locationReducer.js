export function locationReducer (state=[],action){
    let {type}=action;
    switch(type){
        case 'SET_LIVE_LOCATION':
             let {payload}=action;
             state=payload;
             return state;
             
        default:
             return state;
    }
}