import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
      <ChakraProvider>
        <NavBar />
        <ItemListContainer title='Los Mejores Productos al Mejor Precio' />
      </ChakraProvider>

  )
}

export default App

/*
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

        const [count, setCount] = useState(0)

        import reactLogo from './assets/imagenes/mitiendaonline.png'
import viteLogo from '/vite.svg'
import { useState } from 'react'
*/