import React from 'react';
import Carousel from 'react-multi-carousel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Typography, CardActionArea } from "@mui/material";
import Link from 'next/link'

import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CastilloLince from "@public/projects/castillo-lince.png";
import curso from "@public/projects/curso.webp";
import estadionacional from "@public/projects/estadionacional.jpg";
import estadionacionalportamorweb from "@public/projects/estadionacionalportamorweb.webp";
import estadionacionalportamor from "@public/projects/estadionacionalportamor.jpg";
import grupoportamor from "@public/projects/grupoportamor.webp";
import miraflores from "@public/projects/miraflores.webp";
import portamorestadionacional from "@public/projects/portamorestadionacional.jpg";
import portamorgrupo from "@public/projects/portamorgrupo.png";

export const OurProjects: React.FC = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  
  const dataServices = [
    {
      title: "Risoterapia",
      urlImage: CastilloLince,
      content:
        "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "Estimulación cognitiva",
      urlImage: curso,
      content:
        "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "Aspectos legales",
      urlImage: estadionacional,
      content:
        "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "Tecnología",
      urlImage: estadionacionalportamorweb,
      content:
        "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "Risoterapia",
      urlImage: estadionacionalportamor,
      content:
        "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "Estimulación cognitiva",
      urlImage: grupoportamor,
      content:
        "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "Aspectos legales",
      urlImage: miraflores,
      content:
        "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "Tecnología",
      urlImage: portamorestadionacional,
      content:
        "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "Risoterapia",
      urlImage: portamorgrupo,
      content:
        "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
  ];
  return (
    <Box mt={5}>
      <Typography
        variant='h4'
        component='h2'
        fontWeight={(theme) => theme.typography.fontWeightBold}
        textAlign='center'
        mb={5}
      >
        Nuestros <Link href="/proyectos"> Proyectos</Link>
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
          {dataServices.map((x, i) => (
            <Card key={i} sx={{ width: 300 }}>
            <CardActionArea>
              <CardMedia sx={{ height: 280 }}>
                <Box position='relative' height='100%' width='100%'>
                  <Image
                    src={x.urlImage}
                    alt={x.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes='(max-width: 600px) 100vw, 600px'
                  />
                </Box>
              </CardMedia>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", mb: 2 }}>
              <Button
                variant='contained'
                size='small'
                color='primary'
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  window.location.href = 'https://api.whatsapp.com/send?phone=943203772&text=%C2%A1Hola%20Portamor!'
                }}
              >
                Unirse ahora
              </Button>
            </CardActions>
          </Card>
          ))}
      </Carousel>
    </Box>
  );
};