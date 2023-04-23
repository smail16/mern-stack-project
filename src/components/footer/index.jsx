import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material'
import PayImage from 'assets/pay.png'
// import { makeStyles } from '@mui/styles'
import { Link } from 'design-system'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

import { styles } from './styles'

// const useStyles = makeStyles((theme) => ({
//     footer: {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.grey.main,
//       padding: theme.spacing(4),
//     },
//     link: {
//       marginRight: theme.spacing(2),
//       color: theme.palette.grey.main,
//     },
//     socialIcon: {
//       marginRight: theme.spacing(1),
//       color: theme.palette.grey.main,
//       '&:hover': {
//         color: theme.palette.secondary.main,
//       },
//     },
//   }))

function Footer() {
  const theme = useTheme()
  const styleFooter = styles(theme)
  const paymentIcons = [
    <img
      key="icon1"
      src="/path/to/payment-icon1.png"
      alt="Payment Icon 1"
      className="payment-icon"
    />,
  ]
  return (
    <Box
      className={styleFooter.footer}
      p={8}
      mt={4}
      border="1px solid"
      borderColor={theme.palette.grey.main}
      sx={{ backgroundColor: 'white !important' }}
    >
      <Container maxWidth="lg" sm={6} md={4}>
        <Grid container spacing={20}>
          <Grid item xs={12} sm={6} md={4} spacing={10}>
            {/* Footer links */}
            <Typography fontWeight="bold" color="primary" variant="h6" gutterBottom>
              Qui sommes-nous :
            </Typography>

            <Typography variant="body1" gutterBottom mt={3} textAlign="justify">
              On est une marque à forte vocation internationale qui est née en 1994 dans le but
              d’habiller des jeunes soucieux de leur cadre de vie, qui vivent en communauté et
              communiquent entre eux. Des jeunes qui fuient les clichés et aiment se sentir à l’aise
              et décontractés dans leurs vêtements. On consacre alors les dernières tendances
              internationales en les mariant aux influences de la rue et aux clubs à la mode avant
              de les réinventer, dans son style, pour en faire des tenues confortables et faciles à
              porter, toujours au meilleur prix.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* Contact information */}
            <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
              Contactez-nous :
            </Typography>
            <Typography variant="body1" gutterBottom mt={3}>
              Email: ismailfourati94@gmail.com
            </Typography>
            <Typography variant="body1" gutterBottom mt={3}>
              Phone: +33 06 29 50 87 27
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Social media icons */}
            <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
              Suivez-nous :
            </Typography>
            <Stack spacing={8} mt={2}>
              <Stack direction="row" spacing={1} mt={2}>
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  className={styleFooter.socialIcon}
                >
                  <BsFacebook />
                </Link>
                <Link
                  to="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styleFooter.socialIcon}
                >
                  <BsTwitter />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styleFooter.socialIcon}
                >
                  <BsInstagram />
                </Link>
              </Stack>

              <Typography variant="h6" gutterBottom mt={13}>
                <strong>Méthodes de paiement :</strong>
                <img
                  key="icon1"
                  src={PayImage}
                  alt=""
                  style={{ width: '140%', marginTop: '40px' }}
                />
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
