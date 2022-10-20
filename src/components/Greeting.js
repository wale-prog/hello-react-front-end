import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGreeting } from '../redux/GreetingSlice'

const Greeting = () => {
  const greeting = useSelector(state => state.greeting)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(fetchGreeting())
  };
  return (
    <div>
      <button onClick={handleClick}>Refresh</button>
      <p>{greeting.message}</p>
    </div>
  )
}
export default Greeting;