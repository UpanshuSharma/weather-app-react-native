
export function pushSearchHistory(data){
    let action={type:'PUSH_INTO_SEARCH_HISTORY', payload:data}
    return action;
}


export function getSearchHistory(){
     let action={type:'GET_ALL_SEARCH'};
     return action;
}

export function removeSearchFromHistory(id){
   let action={type:'REMOVE_SEARCH_CITY', payload:id}
   return action;   
}

export function clearAllSearchHistory(){
      let action={type:'CLEAR_SEARCH_HISTORy'}
      return action;
}