import { createStore, combineReducers } from 'redux'; 
import { counterReducer }from './counter/CounterReducer'; 

export const rootReducer = combineReducers({
  counter: counterReducer
}); 

// Need a type to describe our application state
export type AppState = ReturnType<typeof rootReducer>; 

export const store = createStore(rootReducer);