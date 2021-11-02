export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'; 
export const DECREMENT_COUNTER = 'DECREMENET_COUNTER'; 

interface IncrementAction {
  type: typeof INCREMENT_COUNTER
}


interface DecrementAction {
  type: typeof DECREMENT_COUNTER
}

export type CounterActionTypes = IncrementAction | DecrementAction;