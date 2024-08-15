import React from 'react'

function BreakPanel({breakLength,incrementBreak,decrementBreak}) {
  return (
   <div className='flex flex-col align-middle justify-center'>
        <h2 id="break-label" className='text-yellow-100 font-semibold text-2xl text-center'>Break Time</h2>
        <button id="break-decrement" className="text-2xl font-semibold cursor-pointer bg-yellow-200 text-orange-950 rounded-lg w-10" onClick={decrementBreak}>-</button>
        <span className='text-2xl'>{breakLength} minutes</span>
        <button id="break-increment" className="text-2xl font-semibold cursor-pointer bg-yellow-200 text-orange-950 rounded-lg w-10" onClick={incrementBreak}>+</button>
        </div>
    
  )
}

export default BreakPanel