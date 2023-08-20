import { useState  } from 'react'
import './App.less'

function App() {
  const [buttons ,buttonuse] = useState("")
  
  const CodeKeyboard= (event: React.KeyboardEvent) => {
    
    console.log(event.code);
    if(event.code === "KeyQ"){
      alert("Q")
    }
  };

  const CodeKeyboardnt= (event: React.KeyboardEvent) => {
    
    console.log(event.code);
    if(event.code === "KeyQ"){
      alert("Q")
      
     
    }
  };

 
  return (
    <div className='bodys'   onKeyUp={CodeKeyboardnt} onKeyDown={CodeKeyboard} >
      <div className='padsbody'>
        <section className='pads'  >
        
            <button id="Q"  tabIndex={0}>Q</button>
            <button>W</button>
            <button>E</button>
      
            <button>A</button>
            <button>S</button>
            <button>D</button>
        
            <button>Z</button>
            <button>X</button>
            <button>C</button>
          
        </section>
      </div>
    </div>
  )
}

export default App
