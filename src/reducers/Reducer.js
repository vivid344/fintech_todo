import { combineReducers } from 'redux'
import searchReducer from './SearchReducer'
import moveCardReducer from './MoveCardReducer'

const reducers = combineReducers({
  searchReducer,
  moveCardReducer
});

export default reducers
