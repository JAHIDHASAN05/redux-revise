import { configureStore } from "@reduxjs/toolkit";
import CounterReducers from './feature/CreateSlice'

export const store= configureStore ({
    reducer:{
     counterJahid: CounterReducers
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch