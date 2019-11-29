import { combineReducers } from 'redux';

import comments from './comments';
import counter from './counter';

const reducer = combineReducers({
    list: comments,
    count: counter
});

export default reducer;