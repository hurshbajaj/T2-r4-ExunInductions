import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [bG, setBG] = useState("yellow");

  function changeBG(color){
    
    setBG(color);
    
    
    
  }

  useEffect(() => {
    document.body.style.backgroundColor = bG;
  }, [bG])
  
  return (
    <>
      <div className='container'>
        <input name="radio"type="radio" className='lMR' checked={bG === 'yellow'} id="radio1" onChange={e => changeBG('yellow')}/>
        <label htmlFor="radio1" className="lM"><span className='span'>Light</span> Mode</label>

        <input name="radio"type="radio"className='dMR' checked={bG === 'blue'} id="radio2" onChange={e => changeBG('blue')} />
        <label htmlFor="radio2" className="dM"><span className='span'>Dark</span> Mode</label>
      </div>

      <div className="container2">
        <p className="q">Need more options? Choose here!</p>
        <input type="color" onChange={e => changeBG(e.target.value)} className="colorPicker" />
      </div>
    </>
  )
}

export default App
