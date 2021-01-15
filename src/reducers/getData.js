const initialState = {
    users:[],
}


const servicesCounter=(state =initialState , action)=>{
    switch(action.type){
      case 'SET_DATA': 
         return {...state,
            users:action.payload}
      default:
         return state;
    }
}

export default servicesCounter;