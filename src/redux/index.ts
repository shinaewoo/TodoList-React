import { combineReducers } from 'redux';
import todo from './store/todo';

const rootReducer = combineReducers({ todo });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
