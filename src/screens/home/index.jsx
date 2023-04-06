import { Card, Grid } from '@mui/material'
import { CardDetails, CardListe, CardModel, NavBar } from 'components'
import React from 'react'

const article = [
  {
      image:"https://img01.ztat.net/article/spp-media-p1/7ff430909ad63e51aa318f9a1732d7bc/fc08049c383849758b51dc446b997b66.jpg?imwidth=1800",
      title:"Pantalon de survêtement",
      price:"49,95 €",
      isFavourite:true
  },
  {
      image:"https://img01.ztat.net/article/spp-media-p1/7ff430909ad63e51aa318f9a1732d7bc/fc08049c383849758b51dc446b997b66.jpg?imwidth=1800",
      title:"Pantalon de survêtement",
      price:"49,95 €",
      isFavourite:true
  },
  {
    image:"https://img01.ztat.net/article/spp-media-p1/7ff430909ad63e51aa318f9a1732d7bc/fc08049c383849758b51dc446b997b66.jpg?imwidth=1800",
    title:"Pantalon de survêtement",
    price:"49,95 €",
    isFavourite:true
  },
  {
    image:"https://img01.ztat.net/article/spp-media-p1/7ff430909ad63e51aa318f9a1732d7bc/fc08049c383849758b51dc446b997b66.jpg?imwidth=1800",
    title:"Pantalon de survêtement",
    price:"49,95 €",
    isFavourite:true
  },
  {
    image:"https://img01.ztat.net/article/spp-media-p1/7ff430909ad63e51aa318f9a1732d7bc/fc08049c383849758b51dc446b997b66.jpg?imwidth=1800",
    title:"Pantalon de survêtement",
    price:"49,95 €",
    isFavourite:true
  },
  {
  image:"https://img01.ztat.net/article/spp-media-p1/7ff430909ad63e51aa318f9a1732d7bc/fc08049c383849758b51dc446b997b66.jpg?imwidth=1800",
  title:"Pantalon de survêtement",
  price:"49,95 €",
  isFavourite:false
  },
  {
    image:"https://img01.ztat.net/article/spp-media-p1/7ff430909ad63e51aa318f9a1732d7bc/fc08049c383849758b51dc446b997b66.jpg?imwidth=1800",
    title:"Pantalon de survêtement",
    price:"49,95 €",
    isFavourite:true
  },
]
function Home() {
  return (
    <>
      <NavBar />
      
      <CardListe article={article}/>
      
      {/* <CardDetails /> */}
    </>
   
  )
}

export default Home
