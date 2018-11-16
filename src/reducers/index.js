import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import appReducer from './app/app.reducer';

const rootReducer = combineReducers({
    routing,
    appReducer
});

export default rootReducer;
