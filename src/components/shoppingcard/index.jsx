/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import * as React from 'react'
import {  Grid } from '@mui/material'

import { Button as CommandeButton } from 'design-system'
import {  useSelector } from 'react-redux'


import Modal from '../modal'
import BasketItem from './index1'
import Total from './total'




    
function Basket  ({onClickCloseIcon,isOpen}) {
                     
    const cart = useSelector((state) => state.cart)
    

    
  return (
    
    
    <Modal  isOpen={isOpen} onClickCloseIcon={onClickCloseIcon} >
           <div style={{display:'flex'}}>
                    <div>
          
                            {cart?.map((article) => (
                                
                            <Grid item  md={3}>
                            <BasketItem 
                            article={article}
                            key={article.id}
                            
                            />
                            </Grid>
                     
            
                                      ))}
                    </div>
                    <div>
                            <Total/>
                    </div>
                    
          
            </div>  
         
                    
    <CommandeButton variant="contained" buttonText="Passer votre commande"/>
    </Modal>
  )
}

export default Basket