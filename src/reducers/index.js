import { combineReducers } from 'redux';

import game from 'reducers/gameDux';

const rootReducer = combineReducers({
  game
});

export default rootReducer;
