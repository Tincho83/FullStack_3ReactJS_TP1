import React from 'react'
import './NavBar.css'

import CartWidget from "../CartWidget/CartWidget"
import reactLogo from '../../assets/imagenes/mitiendaonline.png'


import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, Heading } from '@chakra-ui/react'
import { MenuGroup, MenuOptionGroup, MenuDivider, Spacer } from '@chakra-ui/react'
import { IconButton, Icon, createIcon, Image, Text, Switch, Input } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

import { IoMdMenu, IoMdAdd, IoMdHelpCircleOutline, IoMdSearch } from "react-icons/io";
import { IoCartOutline, IoMoonOutline } from "react-icons/io5";
import { MdAccountBox, MdOutlineLiveHelp, MdOutlineCreditCard } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiPlanetConquest } from "react-icons/gi";



const NavBar = () => {
    return (
        <Box>
            <Flex h={'14hv'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#CAE5FF'} className='flexboxNavBar' id='flexboxNavBarC'>
                <ChakraLink href='https://www.correoargentino.com.ar/' isExternal marginLeft={'25px'} marginRight={'5px'}> <TbTruckDelivery /></ChakraLink>Segui tu compra
                <ChakraLink href='#' isExternal marginLeft={'25px'} marginRight={'2px'}> <MdAccountBox /></ChakraLink>Contacto
                <ChakraLink href='#' isExternal marginLeft={'25px'} marginRight={'2px'}> <FaMapMarkedAlt /></ChakraLink>Sucursales
                <ChakraLink href='#' isExternal marginLeft={'25px'} marginRight={'2px'}> <MdOutlineCreditCard /></ChakraLink>Financiacion
                <ChakraLink href='#' isExternal marginLeft={'25px'} marginRight={'2px'}> <MdOutlineLiveHelp /></ChakraLink>Ayuda
                <ChakraLink href='https://www.nationalgeographicla.com/medio-ambiente/2023/04/dia-de-la-tierra-10-acciones-sustentables-que-puedes-realizar-para-cuidar-el-planeta' isExternal marginLeft={'25px'} marginRight={'5px'}> <GiPlanetConquest /></ChakraLink>Cuidemos el Planeta

            </Flex>

            <Flex h={'14hv'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#CAE5FF'} className='flexboxNavBar' id='flexboxNavBarD'>
                <Menu className='menuHeader'>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<IoMdMenu />}
                        variant='outline'
                        className='botonMenu'
                    />
                    <MenuList>
                        <MenuItem icon={<MdAccountBox />} command='' className='botonMenuItem'>
                            Mi Cuenta
                        </MenuItem>
                        <MenuItem icon={<GrCatalog />} command='' className='botonMenuItem'>
                            Productos
                        </MenuItem>
                        <MenuItem icon={<IoCartOutline />} command='' className='botonMenuItem'>
                            Mi Carrito
                        </MenuItem>
                        <MenuItem icon={<IoMdHelpCircleOutline />} command='' className='botonMenuItem'>
                            Ayuda
                        </MenuItem>
                        <MenuItem icon={<IoMdSearch />} command='' className='botonMenuItem'>
                            Buscar
                            <Input placeholder='Buscar' size='md' type='Search' />
                        </MenuItem>
                        <MenuItem icon={<IoMoonOutline />} command='' className='botonMenuItem'>
                            Modo Noche
                            <Switch colorScheme='teal' size='lg' />
                        </MenuItem>
                    </MenuList>
                </Menu>
                <img src={reactLogo} alt="Logo Mi tienda Online" class="imglogo"></img>
                <Heading color={'#6F8AB7'} fontSize={'xx-large'} m='10px'>Mi Tienda Online</Heading>
                <CartWidget />
            </Flex>
        </Box>
    )
}

export default NavBar

// <Text as='b' fontSize='32px' color='#6F8AB7'>Mi Tienda Online</Text>

/*
                <Stack align='center' direction='row'>
                    <Switch colorScheme='teal' size='lg' />
                </Stack>
<Input placeholder='Select Date and Time' size='md' type='datetime-local' />

*/