import { useState} from 'react'
import './App.less'

function App() {
  const [buttons ,buttonuse] = useState("")
  const [Volume, Volumechange] = useState("")

  const Pressedk = function(name:string,selected:string){
    const audio = new Audio(name)
    buttonuse(selected)
    audio.volume = parseInt(Volume)/10;
    audio.play()
  }
 
  return (
    <div className='bodys' >
      <div className='padsbody'>
        <section className='pads'  >
        
            <button onClick={() => Pressedk("../sounds/Heater-1.mp3","Heater-1")} tabIndex={0}>Q</button>
            <button onClick={()=>Pressedk("../sounds/Heater-2.mp3","Heater-2")}>W</button>
            <button onClick={()=>Pressedk("../sounds/Heater3.mp3","Heater3")}>E</button>
      
            <button onClick={()=>Pressedk("../sounds/Heater-4_1.mp3","Heater-4_1")}>A</button>
            <button onClick={()=>Pressedk("../sounds/Heater-6.mp3","Heater-6")}>S</button>
            <button onClick={()=>Pressedk("../sounds/Cev_H2.mp3","Cev_H2")}>D</button>
        
            <button onClick={()=>Pressedk("../sounds/Dsc_Oh.mp3","Dsc_Oh")}>Z</button>
            <button onClick={()=>Pressedk("../sounds/Kick_n_Hat.mp3","Kick_n_Hat")}>X</button>
            <button onClick={()=>Pressedk("../sounds/RP4_KICK_1.mp3","RP4_KICK_1")}>C</button>

            <input type="range" value={Volume} onChange={(e)=>Volumechange(e.target.value)} min="0" max="10"/>
            
            
            {Number.isNaN(parseInt(Volume)*10) === true&&
            <h1>0🔈</h1>
            }

            {Number.isNaN(parseInt(Volume)*10)===false &&
            <h1>{parseInt(Volume)*10}🔊</h1>
            }
            
            

        </section>
        <div className='Names'>
              <h1>{buttons}</h1>
            </div>
      </div>
    </div>
  )
}

export default App
