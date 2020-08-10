import { combineReducers } from 'redux';
import globalReducer from './global/reducer';
import productsReducer from './products/reducer';
import sessionReducer from './authUser/reducer';
import categoriesReducer from './categories/reducer';
import transactionsReducer from './transactions/reducer';

const rootReducer = combineReducers({
  global: globalReducer,
  products: productsReducer,
  session: sessionReducer,
  categories: categoriesReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
