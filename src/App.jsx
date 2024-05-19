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

