import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
import carReducer from './carReducer'

const rootReducer = combineReducers({
   userReducer: reducer,
   carReducer
})

export default createStore(rootReducer);