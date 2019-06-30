import React, { useContext } from 'react'
import { CounterContext } from './App'

const Increment: React.SFC = () => {
  const { state, dispatch } = useContext(CounterContext)
  const increment = (e: any) => {
    e.preventDefault()
    dispatch({
      type: 'increment',
    });
  }

  const decrement = (e: any) => {
    e.preventDefault()
    dispatch({
      type: 'decrement',
    })
  }

  const reset = (e: any) => {
    e.preventDefault()
    dispatch({
      type: 'reset',
    })
  }

  return (
    <div>
      <p>{ state.counter }</p>
      <button onClick={ increment }>increment</button>
      <button onClick={ decrement }>decrement</button>
      <button onClick={ reset }>reset</button>
    </div>
  )
}

export {
  Increment,
}