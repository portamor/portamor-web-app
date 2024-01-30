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

export const Projects: React.FC = () => {

  
const dataServices = [
  {
    title: "Risoterapia",
    urlImage: therapy,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Estimulación cognitiva",
    urlImage: estimulation,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Aspectos legales",
    urlImage: legals,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Tecnología",
    urlImage: technology,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Risoterapia",
    urlImage: therapy,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Estimulación cognitiva",
    urlImage: estimulation,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Aspectos legales",
    urlImage: legals,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Tecnología",
    urlImage: technology,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Risoterapia",
    urlImage: therapy,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Estimulación cognitiva",
    urlImage: estimulation,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Aspectos legales",
    urlImage: legals,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Tecnología",
    urlImage: technology,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
];

  return (
    <Layout>
      <Stack direction={"row"}  spacing={2} display="flex" justifyContent="center" flexWrap="wrap">
        {/*<div style={{ display: 'flex', flexWrap: 'wrap',  alignItems: 'center', justifyContent: 'center' }}>*/}
          {dataServices.map((x, i) => (
            <Card key={i} sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia sx={{ height: 280 }}>
                <Box position='relative' height='100%' width='100%'>
                  <Image
                    src={x.urlImage}
                    alt={x.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='body2' component='div'>
                  {x.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {x.content}
                </Typography>
              </CardContent>
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
