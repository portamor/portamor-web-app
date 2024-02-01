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

export const Talleres: React.FC = () => {

  
const dataServices = [
  {
    title: "taller1",
    src: "/talleres/taller1.mp4",
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "taller2",
    src: "/talleres/taller2.mp4",
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "taller3",
    src: "/talleres/taller3.mp4",
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
        Nuestros Talleres
      </Typography>
      <Stack direction={"row"}  spacing={2} display="flex" justifyContent="center" flexWrap="wrap">
      {
        dataServices.map((item, index) => {
          return (
            <Card sx={{ width: 300 }} key={index}>
              <CardActionArea>
                <Box position='relative' height='100%' width='100%'>
                  <video width="320" height="240" controls preload="none">
                    <source src={item.src} type="video/mp4" />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                  </video>
                </Box>
              </CardActionArea>
            </Card>
          );
        })
      }
      <Card sx={{ width: 300 }}>
        <CardActionArea>
          <CardMedia sx={{ height: 280 }}>
            <Box position='relative' height='100%' width='100%'>
            <video width="320" height="240" controls preload="none">
              <source src="/taller1.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            </video>
            </Box>
          </CardMedia>
        </CardActionArea>
      </Card>
      </Stack>
    </Layout>
  );
};

export default Talleres;
