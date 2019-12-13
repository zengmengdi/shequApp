import {createStore} from 'redux'
var initState={
    username:"tom"
}
function reducer(state=initState,action){
    switch(action.type){
        case "storename":
            state.username=action.payload;
            return state;
        default:
            break
    }
}
let store=createStore(reducer)
export default store