import { combineReducers } from 'redux'
import names from './addNames'
import ownedTotal from './ownedTotal'
export default combineReducers({
  names,
  ownedTotal
})