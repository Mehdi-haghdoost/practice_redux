import { createAction, createReducer } from "@reduxjs/toolkit"

export const addTodo = createAction('ADD_TODO');
export const removeTodo = createAction('REMOVE_TODO');
export const doTodo = createAction('DO_TODO');

export default createReducer([], {
    [addTodo.type]: (state, action) => {
        state.push(action.payload)
    },
    [removeTodo.type]: (state, action) => {
        //coding
    },
    [addTodo.type]: (state, action) => {
        //coding
    }
})

// Reducer
// export default function reducer(state = [], action) {
//     switch (action.type) {
//         case addTodo.type: {
//             return [...state, action.payload]
//         }
//         case removeTodo.type: {
//             return state.filter(todo => todo.id !== action.payload.id)
//         }
//         default: {
//             return state;
//         }
//     }
// }

