import produce from 'immer'
import execHandler from './reducerUtils'

const initialState = {
    users:[],
    currentUser:null
} 

const user = {
    createUser(state,action){
        debugger
        state.currentUser = action.payload
        // alert(JSON.stringify(state.currentUser))
    },
    getUser(state,action){
    state.users.push(action.payload)
    },
    login(state,action){
        debugger
        state.currentUser = action.payload
       alert(JSON.stringify(state.currentUser))
    }
    ,initialState
}


export default produce((state,action)=>{
    execHandler(state,action,user)
},initialState)

