import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [activeButton, setActiveButton] = useState('button1');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
    <div className='mx-auto w-max'>
      <h1 className=' text-5xl my-10 font-bold'>redux revice</h1>

      
    </div>
      <div className="flex justify-center">
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          activeButton === 'button1' ? 'bg-blue-700' : ''
        }`}
    
      >
       increament
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          activeButton === 'button1' ? 'bg-blue-700' : ''
        }`}
    
      >
      Out put
      </button>
       
      <button
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 ${
          activeButton === 'button2' ? 'bg-green-700' : ''
        }`}
       
      >
        decreament
      </button>
    </div>
    </>
  )
}

export default App
