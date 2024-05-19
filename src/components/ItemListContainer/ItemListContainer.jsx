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
