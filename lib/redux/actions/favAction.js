
export function addToFav(data){
    let action={type:'MARK_FAV', payload:data}
    return action;
}



export function removeFromFav(id){
   let action={type:'UNMARK_FAV', payload:id}
   return action;   
}

export function clearAllFav(){
      let action={type:'CLEAR_ALL_FAV'}
      return action;
}