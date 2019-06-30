/// <reference types="react-scripts" />

interface State {
  counter: number,
}

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }

type Dispatch = (action: Action) => void

type Context = {
  state: State,
  dispatch: Dispatch,
}

interface CounterProviderProps {
  children: JSX.Element[] | JSX.Element
}