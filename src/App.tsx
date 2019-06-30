import React, { useReducer, createContext } from 'react'
import { Increment } from './increment'

const initialState: State = {
  counter: 0,
}

const CounterContext = createContext({} as Context)

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CounterContext.Provider value={ { state, dispatch } }>
        { children }
    </CounterContext.Provider>
  )
}

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
      }
    case 'decrement':
      return {
        counter: state.counter - 1,
      }
    case 'reset':
      return {
        counter: initialState.counter,
      }
    default:
      return state
  }
}

const App: React.FC = () => {
  return (
    <CounterProvider>
      <Increment />
    </CounterProvider>
  )
}

export {
  App,
  CounterContext,
  CounterProvider,
}
