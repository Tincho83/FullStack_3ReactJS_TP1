import React from 'react'
import { Divider, Flex, Heading, Text } from '@chakra-ui/react'

const ItemListContainer = ({ title }) => {
  return (
      <Flex justify={'center'} align={'center'}>        
        <Text as='b' fontSize='16px' color='black'>{title}</Text>

      </Flex>





  )
}

export default ItemListContainer


/*
        <h2>Lista de Productos</h2>
      <Div>
        <p>Producto1</p>
        <p>Producto2</p>
        <p>Producto3</p>
      </Div>

*/