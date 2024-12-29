import { useState } from 'react'

import './App.css'

import { decreament, decreamentByValue, increament } from './redux/feature/CreateSlice';
import { useAppDispatch, useAppSelector } from './redux/feature/hook.ts/hook';

function App() {
  // const [count, setCount] = useState(0)
  const [activeButton, setActiveButton] = useState('button1');


   const value = useAppSelector((state)=>state.counterJahid.value)
  const dispatch = useAppDispatch()
  return ( 
    <>
    <div className='mx-auto w-max'>
      <h1 className=' text-5xl my-10 font-bold'>redux revice</h1>

      
    </div>
      <div className="flex justify-center">
      <button
       onClick={()=>dispatch(increament())}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          activeButton === 'button1' ? 'bg-blue-700' : ''
        }`}
    
      >
       increament
      </button>
      <button
        className={`bg-blue-500 mx-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          activeButton === 'button1' ? 'bg-blue-700' : ''
        }`}
    
      >
      {value}
      </button>
       
      <button
      onClick={()=>dispatch(decreament())}
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 ${
          activeButton === 'button2' ? 'bg-green-700' : ''
        }`}
       
      >
        decreament
      </button>
      <button
      onClick={()=>dispatch(decreamentByValue({jahid:5}))}
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 ${
          activeButton === 'button2' ? 'bg-green-700' : ''
        }`}
       
      >
        decreament by value
      </button>
    </div>
    </>
  )
}

export default App
