import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerAccounts from './reducerAccounts';

const rootReducer = combineReducers({
  accounts: reducerAccounts,
  form: formReducer
});

export default rootReducer;
