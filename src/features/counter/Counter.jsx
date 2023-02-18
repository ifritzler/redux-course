import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount, selectCounterValue } from './counterSlice'

const Counter = () => {
  const count = useSelector(selectCounterValue)
  const dispatch = useDispatch()

  return (
    <div className='w-80 min-h-[320px] border border-l-gray-200  opacity-80 flex flex-col p-8 gap-4 justify-around text-center rounded-lg shadow-xl'>
      <h2 className='text-3xl text-pink-600 font-bold '>Counter</h2>
      <button className='p-3 bg-blue-700 text-white rounded-xl mr-2' onClick={() => dispatch(increment())}>Increment</button>
      <button className='p-3 bg-blue-700 text-white rounded-xl mr-2' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='p-3 bg-gray-700 text-white rounded-xl mr-2' onClick={() => dispatch(reset())}>Reset</button>
      <button className='p-3 bg-red-700 text-white rounded-xl mr-2' onClick={() => dispatch(incrementByAmount(4))}>Increment by 4</button>
      <p className='text-3xl'>{count}</p>
    </div>
  )
}

export default Counter