import { useState } from 'react'

import './App.css'

function App() {
  const [state, setState ] = useState(0);

  return (
    <div className="App">
      <h2>Clique no botão abaixo para atualizar o número</h2>
      <button onClick={() => setState((state) => state + 1)} >Atualizar</button>
        <h3 className='numero'>Total de atualização: {state}</h3>
    </div>
  )
}

export default App