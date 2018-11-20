import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import loaderReducer from './loader/loader.reducer';
import appReducer from './app/app.reducer';

const rootReducer = combineReducers({
    routing,
    loaderReducer,
    appReducer
});

export default rootReducer;
