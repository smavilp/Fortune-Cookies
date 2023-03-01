import { useState } from 'react'
import './App.scss'
import Proverb from './assets/components/Proverb'
import Source from './assets/components/Source'
import phrases from "../src/assets/data/phrases.json"

function App() {
  const backgroundsUrls = ["url(/background1.jpg)", "url(/background2.jpg)", "url(/background3.jpg)", "url(/background4.jpg)" ]
  const [indexBackground, setIndexBackground] = useState(0)
  const changeBackground = () => {
    setIndexBackground(Math.floor(Math.random()*backgroundsUrls.length))
  } 

  const [indexProverb, setIndexProverb] = useState(0)
  const changeProverb = () => {
    setIndexProverb(Math.floor(Math.random()*phrases.length))
  } 

  const changeIndex = () =>{
    changeProverb()
    changeBackground()
  }

  return (
    <div className="App" style={{backgroundImage:backgroundsUrls[indexBackground]}}>
      <div className='App-div'>
        <h1 className='App-h1'>galletas de la fortuna</h1>
        <Proverb
          text = {phrases[indexProverb].phrase}
        />
        <button className='App-btn' onClick={changeIndex}>
          Probar mi suerte
        </button>
      </div>
      <Source
        text = {phrases[indexProverb].author}
      />
    </div>
  )
}

export default App
