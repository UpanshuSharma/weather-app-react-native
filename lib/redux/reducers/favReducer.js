
export function favReducer(state = [], action) {
    let {type} = action;
    let {payload} = action;
    switch (type) {
          case 'MARK_FAV':
                if (state.length !== 0) {
                  let a = state.slice(-1);
                  payload.id = a[0].id + 1;
                } else {
                  payload.id = 1;
                }
                return [...state, payload];

          case 'UNMARK_FAV':
                return state.filter(st => st.id !== payload);

          case 'CLEAR_ALL_FAV':
                state = [];
                return state;
          default :
                 return state;
    }
}
