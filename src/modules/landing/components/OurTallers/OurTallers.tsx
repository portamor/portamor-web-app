import React from "react"
import Carousel from "react-multi-carousel"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import { Box, Typography, CardActionArea } from "@mui/material"
import Link from "next/link"

import "react-multi-carousel/lib/styles.css"

export const OurTallers: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  const dataServices = [
    {
      title: "taller1",
      src: "/talleres/taller1.mp4",
      thumbnail: "/talleres/taller1.png",
      content: "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "taller2",
      src: "/talleres/taller2.mp4",
      thumbnail: "/talleres/taller2.png",
      content: "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "taller3",
      src: "/talleres/taller3.mp4",
      thumbnail: "/talleres/taller3.png",
      content: "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
  ]
  return (
    <Box mt={5}>
      <Typography
        variant="h4"
        component="h2"
        fontWeight={theme => theme.typography.fontWeightBold}
        textAlign="center"
        mb={5}
      >
        Nuestros <Link href="/talleres"> Talleres</Link>
      </Typography>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        rewindWithAnimation={true}
      >
        {dataServices.map((item, index) => {
          return (
            <Card sx={{ minWidth: "40%" }} key={index}>
              <CardActionArea>
                <Box position="relative" height="100%" width="100%">
                  <video width="100%" height="300" controls preload="none" poster={item.thumbnail}>
                    <source src={item.src} type="video/mp4" />
                    <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
                  </video>
                </Box>
              </CardActionArea>
            </Card>
          )
        })}
      </Carousel>
    </Box>
  )
}
