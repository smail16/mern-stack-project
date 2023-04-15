import { useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { Button } from 'design-system'
import React, { useCallback, useMemo, useState } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { articles } from 'mocks/articles'
import { useSelector } from 'react-redux'
import ModalSignin from '../modalSignin'
import ModalSignup from '../modalSignup'
import Basket from '../shoppingcard'
import { styles } from './styles'

const pages = ['men', 'woman']
const settings = ['Mes commandes', 'Profile']

function NavBar({ activePage}) {
  
  const cart = useSelector((state) => state.cart)
  const products = useSelector((state) => state.products)
  // console.log(cart, 'hello')
  const itemCount = cart.reduce((total, item) => total + Number(item.quantity), 0)
  // console.log(itemCount , '1')
  const favouriteCount = products.filter((item) => item.isFavourite === true).length 
  // console.log(favouriteCount,'count')

  
  const [isSigninVisible, setIsSigninVisible] = useState(false)
  const [isSignupVisible, setIsSignupVisible] = useState(false)
  const [isBasketVisible, setIsBasketVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const isUserConnected = true
  const theme = useTheme()
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  const stylesNavBar = useCallback((isActiveItem) => styles(theme, isActiveItem), [theme])
  

  const RenderCategories = useCallback(
    () =>
      pages.map((page, index) => (
        <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'black' }}>
          <Typography
            textAlign="center"
            mx={2}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            sx={stylesNavBar(page === activePage).categoryText}
          >
            {page}
          </Typography>
        </Link>
      )),
    [activePage, stylesNavBar],
  )

  return (
    <>
    
      <ModalSignin isOpen={isSigninVisible} onClickCloseIcon={() => setIsSigninVisible(false)} />
      <ModalSignup isOpen={isSignupVisible} onClickCloseIcon={() => setIsSignupVisible(false)} />
      <Basket
        
        isOpen={isBasketVisible}
        onClickCloseIcon={() => setIsBasketVisible(false)}
      />
      <Box
        display="flex"
        alignItems="center"
        borderBottom="1px solid"
        justifyContent="space-between"
        borderColor={theme.palette.grey.main}
        p={2}
      >
        
        <Box display="flex" sx={stylesNavBar().leftSide}>
          <RenderCategories />
        </Box>

        <Box display="none" sx={stylesNavBar().iconMenu} onClick={() => setIsDrawerVisible(true)}>
          <IoIosMenu size={30} />
        </Box>
        {isUserConnected ? (
          <>
            <Box display="flex" alignItems="center">
              <Badge badgeContent={favouriteCount || '0'} color="primary">
                <AiOutlineHeart size={30} />
              </Badge>
              <Badge
                sx={{ width: 32, height: 32, marginLeft: '2rem' }}
                badgeContent={itemCount || '0'}
                color="primary"
                onClick={() => setIsBasketVisible(true)}
              >
                <AiOutlineShoppingCart size={30}/>
                
                
              </Badge>

              <Avatar
                onClick={() => setIsMenuVisible(true)}
                sx={{ width: 32, height: 32, marginLeft: '2rem' }}
              >
                M
              </Avatar>
            </Box>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuVisible}
              onClose={() => setIsMenuVisible(false)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem>
                <Typography textAlign="center">Déconnexion</Typography>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box display="flex">
            <Box mr={1}>
              <Button
                onClick={() => setIsSigninVisible(true)}
                variant="contained"
                buttonText="se connecter"
              />
            </Box>
            <Button
              onClick={() => setIsSignupVisible(true)}
              variant="outlined"
              buttonText="s'inscrire"
            />
            <Button
              sx={{ width: 32, height: 32, marginLeft: '2rem' }}
              badgeContent={itemCount === 0 ? '0' : itemCount}
              color="primary"
            >
              <AiOutlineShoppingCart size={30}/>
            </Button>
          </Box>
        )}
        <Drawer
          open={isDrawerVisible}
          onClose={() => setIsDrawerVisible(false)}
          sx={stylesNavBar().drawer}
        >
          <Box
            borderBottom="1px solid"
            borderColor={theme.palette.grey.main}
            p={2}
            onClick={() => setIsDrawerVisible(false)}
          >
            <IoMdClose size={30} />
          </Box>
          <RenderCategories />
        </Drawer>
      </Box>
    </>
  )
}

export default NavBar
