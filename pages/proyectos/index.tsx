import React from 'react';
import {
  Banner,
  FormRegister,
  OurAccomplishments,
  OurAdvantages,
  OurBenefits,
  OurMemberShips,
  OurPrograms,
} from "@src/modules/landing/components";
import Layout from "@src/modules/shared/components/layout";
import {
  Box,
  Tab,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import estimulation from "@public/benefits/estimulation.jpg";
import legals from "@public/benefits/legals.jpg";
import technology from "@public/benefits/technology.jpg";
import therapy from "@public/benefits/therapy.jpg";

import CastilloLince from "@public/projects/castillo-lince.png";
import curso from "@public/projects/curso.webp";
import estadionacional from "@public/projects/estadionacional.jpg";
import estadionacionalportamorweb from "@public/projects/estadionacionalportamorweb.webp";
import estadionacionalportamor from "@public/projects/estadionacionalportamor.jpg";
import grupoportamor from "@public/projects/grupoportamor.webp";
import miraflores from "@public/projects/miraflores.webp";
import portamorestadionacional from "@public/projects/portamorestadionacional.jpg";
import portamorgrupo from "@public/projects/portamorgrupo.png";

export const Projects: React.FC = () => {

  
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
    <Layout>
      <Typography
        variant='h4'
        component='h2'
        fontWeight={(theme) => theme.typography.fontWeightBold}
        textAlign='center'
        mb={5}
      >
        Nuestros Proyectos
      </Typography>
      <Stack direction={"row"}  spacing={2} display="flex" justifyContent="center" flexWrap="wrap">
        {/*<div style={{ display: 'flex', flexWrap: 'wrap',  alignItems: 'center', justifyContent: 'center' }}>*/}
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
              {/*<CardContent>
                <Typography gutterBottom variant='body2' component='div'>
                  {x.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {x.content}
                </Typography>
              </CardContent>*/}
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
        {/*</div>*/}
      </Stack>
    </Layout>
  );
};

export default Projects;
