import {createStore,combineReducers,applyMiddleware} from 'redux'
import user from './reducers/userReducer'
import {middle} from './middlewares/middleWare'

const reducer = combineReducers({user})
const store = createStore(reducer,(applyMiddleware(middle)))


window.store = store
export default store