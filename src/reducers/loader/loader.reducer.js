import _ from 'lodash';

const initialState = {
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_LOADER':
            return _.assign({}, state, {isLoading: action.flag});
        default:
            return state;
    }
}