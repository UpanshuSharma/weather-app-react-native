


export function searchReducer(state = [], action) {
        let {type} = action;
        let {payload} = action;
        switch (type) {
              case 'PUSH_INTO_SEARCH_HISTORY':
                    if (state.length !== 0) {
                      let a = state.slice(-1);
                      payload.id = a[0].id + 1;
                    } else {
                      payload.id = 1;
                    }
                    return [...state, payload];

              case 'GET_ALL_SEARCH':
                    return state;

              case 'REMOVE_SEARCH_CITY':
                    return state.filter(st => st.id !== payload);

              case 'CLEAR_SEARCH_HISTORy':
                    state = [];
                    return state;
              default :
                     return state;
        }
}
