import { useReducer } from "react"

type State = {
  count: number
}

// type Action = {
//   type: "increament" | "decreament" | "reset",
//   payload?: number
// }


// Discriminated unions in Typescript

type UpdateAction = {
  type: "increament" | "decreament" 
  payload: number
}

type ResetAction = {
  type: "reset",
}

type CounterAction = UpdateAction | ResetAction


const initialState = { count: 0 }

function reducer(state: State, action: CounterAction) {
  switch (action.type) {
    case 'increament':
      return { count: state.count + action.payload }            
    case 'decreament':
      return { count: state.count - action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }  
}


function Count() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>

      <h2>Count : {state.count}</h2>

      <button
        type="button"
        onClick={() => dispatch({ type: "increament", payload: 2 })}>
        Increament
      </button>

      <button
        type="button"
        onClick={() => dispatch({ type: "decreament", payload: 1 })}>
        Decreament
      </button>

      <button
        type="button"
        onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
      
    </div>
  )
}

export default Count