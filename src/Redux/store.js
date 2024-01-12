import {configureStore} from '@reduxjs/toolkit';
import todosReducer from './store/todos'

const store = configureStore({
    reducer : todosReducer
})
console.log(store);
export default store ;
