import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"


export const getTodosFromServer = createAsyncThunk(
    'Todos/getTodosFromServer',
    async (url) => {
        return fetch (url)
        .then(res => res.json())
        .then(data => data)
    }
)

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
    },
    extraReducers : (builder) => {
        builder.addCase(getTodosFromServer.fulfilled , (state,action) => {
            console.log('state :' , state);
            console.log('actions : ' , action);

            state.push(...action.payload)
        }) 
    }
})

// console.log(slice);

export const { addTodo, removeTodo, doTodo } = slice.actions;
export default slice.reducer;
