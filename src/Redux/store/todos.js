import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'Todos',
    initialState: [],
    reducers: {
        addTodo: (todos, action) => {
            todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            //coding
        },
        doTodo: (state, action) => {
            //coding
        }
    }
})

console.log(slice);

export const { addTodo, removeTodo, doTodo } = slice.actions;
export default slice.reducer;
