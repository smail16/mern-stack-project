import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import PayImage from 'assets/pay.png'
import { Achat } from 'components'
import { Button as AchatButton } from 'design-system'
import React, { useState } from 'react'





function Pay() {
  

  const [userInfo, setUserInfo] = useState({
    name: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvc: '',
  })

  const [step, setStep] = useState(1)

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === "cardNumber" && Number.isNaN(Number(value))) {
      
      setUserInfo({ ...userInfo, [name]: userInfo[name] })
    } else if (name === "cardNumber" && value.length > 16) {
      
      setUserInfo({ ...userInfo, [name]: value.slice(0, 16) })
    } else {
      
      setUserInfo({ ...userInfo, [name]: value })
    }
  }

  const handleSubmit = () => {
    console.log(userInfo)
    if (
      userInfo.name &&
      userInfo.cardNumber &&
      userInfo.expirationMonth &&
      userInfo.expirationYear &&
      userInfo.cvc
    ) {
      setStep(2)
    } else  {
      alert("Veuillez remplir vos coordonnées bancaires.")
  
    }
  }

  return (
    <center>
      <div>
      
        <div>
        
          {step === 1 && (
            <>
            <Box>
              <Typography variant="h5" fontWeight="bold" mt={10}>
             Récapitulatif de l’achat{' '}
              </Typography>
                <Achat />
            </Box>
            
            <div style={{"display":"flex","flex-direction": "column" ,"align-items": "center","flex-wrap": "wrap", "gap":"20px"}} >
              
              <Typography variant="h5" fontWeight="bold" marginTop={17}>
              Veuillez entrer vos coordonnées bancaires{' '}
              </Typography>
              
              <TextField
                label="Nom et Prénom"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size="small"
                align="center"
                style={{ width: '400px' }} 
              />
              
              <TextField
                label="Numéro de carte"
                name="cardNumber"
                value={userInfo.cardNumber}
                onChange={handleChange}
                margin="normal"
                size="small"
                align="center"
                style={{ width: '400px' }} 
              />
              <Grid display='flex'>
            <Grid item xs={2} >
              <TextField
                select
                label="Mois d'expiration"
                name="expirationMonth"
                value={userInfo.expirationMonth}
                onChange={handleChange}
                margin="normal"
                size="small"
                align="center"
                style={{ width: '200px' }} 
              >
                <MenuItem value="01">01</MenuItem>
                <MenuItem value="02">02</MenuItem>
                <MenuItem value="03">03</MenuItem>
                <MenuItem value="04">04</MenuItem>
                <MenuItem value="05">05</MenuItem>
                <MenuItem value="06">06</MenuItem>
                <MenuItem value="07">07</MenuItem>
                <MenuItem value="08">08</MenuItem>
                <MenuItem value="09">09</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="11">11</MenuItem>
                <MenuItem value="12">12</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                label="Année d'expiration"
                name="expirationYear"
                value={userInfo.expirationYear}
                onChange={handleChange}
                
                margin="normal"
                size="small"
                align="center"
                style={{ width: '200px' }} 
              >
                
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
                <MenuItem value="2024">2025</MenuItem>
                <MenuItem value="2024">2026</MenuItem>
                <MenuItem value="2024">2027</MenuItem>
                
              </TextField>
            </Grid>
          </Grid>
              <TextField
                label="Code de vérification (CVC)"
                name="cvc"
                value={userInfo.cvc}
                onChange={handleChange}
              
                margin="normal"
                size="small"
                align="center"
                style={{ width: '400px' }} 
              />
              
              <AchatButton
                type='Submit'
                variant="contained"
                color="primary"
                buttonText="Confirmer l’achat"
                onClick={() => handleSubmit()}
              />
              <img key="icon1" src={PayImage} alt="" style={{ width: '50%', marginTop: '40px' }} />
            </div>
            
            </>
          )}
          
          
          {step === 2 && (
            <div>
              <Typography variant="h4">Achat confirmé</Typography>
              {/* Afficher un message de confirmation de l'achat */}
              <Typography variant="body1">Merci d’avoir effectué votre achat !</Typography>
            </div>
            
          )}
          
        </div>
        
      </div>
    </center>
  )
}

export default Pay
// {step === 2 && (
  // <div>
  //   <Typography variant="h4">Récapitulatif de l’achat</Typography>
  //   {/* Afficher un récapitulatif de l'achat avec les informations du produit et de l'utilisateur */}
  //   <Typography variant="body1">Nom: {userInfo.name}</Typography>
  //   <Typography variant="body1">Adresse: {userInfo.address}</Typography>
  //   {/* Ajouter d'autres champs pour les informations de paiement */}
  //   <Button
  //     variant="contained"
  //     color="primary"
  //     
  //     onClick={handleSubmit}
  //   />
  // </div>
// )}