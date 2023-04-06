const initialState = {
    favorites:{
        content:[],
    }
}
const mainReducer =(state=initialState,action)=>{
switch(action.type){
    case 'ADD-JOBS-ON-FAVOURITE':
        return{
            ...state,
            favorites:{
                content:[...state.favorites.content, action.payload],
                
            }
        }
    default:
        return state
}
}
export default mainReducer;
