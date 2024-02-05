import { Box, Button, Container, Link, Typography } from "@mui/material";
import {
  Banner,
  FormRegister,
  OurAccomplishments,
  OurAdvantages,
  OurBenefits,
  OurMemberShips,
  OurPrograms,
} from "@src/modules/landing/components";
import Head from "next/head";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Layout from "@src/modules/shared/components/layout";
import { ReactElement } from "react";
import { OurRecognitions } from "@src/modules/landing/components/OurRecognitions/OurRecognitions";
import { OurProjects } from "@src/modules/landing/components/OurProjects/OurProjects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portamor - Primera Escuela Integral del adulto mayor</title>
        <meta name='description' content='Plataforma que promueve el envejecimiento activo y saludable e involucra a la familia a una vida plena, activa y conectada' />
        <link rel='icon' href='/favicon.ico'/>
        {/* Add SEO meta tags */}
        <meta name='keywords' content='Portamor, envejecimiento activo, salud física, salud mental, participación social, Alimentación Saludable' />
        <meta name='author' content='portamor team' />
        <meta name='robots' content='index, follow' />
        {/* Add Open Graph meta tags */}
        <meta property='og:title' content='Portamor - Envejecimiento activo' />
        <meta property='og:description' content='Plataforma que promueve el envejecimiento activo y saludable e involucra a la familia a una vida plena, activa y conectada' />
        <meta property='og:image' content='/logo.png' />
        <meta property='og:url' content='https://www.portamor.com' />
        <meta property='og:type' content='website' />
        {/* Add Twitter Card meta tags */}
        <meta name='twitter:card' content='/logo.png' />
        <meta name='twitter:title' content='Portamor - Envejecimiento activo' />
        <meta name='twitter:description' content='Plataforma que promueve el envejecimiento activo y saludable e involucra a la familia a una vida plena, activa y conectada' />
        <meta name='twitter:image' content='/logo.png' />
        {/* Add more Open Graph meta tags */}
        <meta property='og:locale' content='es_pe' />
        <meta property='og:site_name' content='Portamor' />
      </Head>
      <Banner />
      <Container maxWidth='lg'>
        <Box mb={4}>
          <Typography
            variant='h4'
            component='h2'
            fontWeight={(theme) => theme.typography.fontWeightBold}
            textAlign='center'
            mb={3}
          >
            Propósito{" "}
            <Typography
              variant='inherit'
              component='span'
              color={(theme) => theme.palette.primary.main}
            >
              Portamor
            </Typography>
          </Typography>
          <Box display='flex' justifyContent='center' alignItems='end'>
            <Typography variant='body2' mr={2} width='calc(100% - 200px)'>
              Empoderar a más adultos mayores hacia un envejecimiento activo y
              saludable para fortalecer la salud física, mental y social que
              venimos compartiendo y construyendo con nuestra comunidad
              portamor.
              <br />
              <Link
                href='https://www.youtube.com/watch?v=2BYMUkh-jRY&ab_channel=Portamor%F0%9F%92%9FComunidaddeadultosmayores'
                underline='hover'
                color='primary'
                mt={1}
                display='inline-block'
              >
                Ver video
              </Link>
            </Typography>
            <Button variant='outlined' endIcon={<ArrowForwardIcon />} onClick={() => {
              window.location.href = 'https://api.whatsapp.com/send?phone=943203772&text=%C2%A1Hola%20Portamor!'
            }}>
              Conocer más
            </Button>
          </Box>
        </Box>
        <OurPrograms />
        <OurBenefits />
        <OurAdvantages />
        <OurMemberShips />
        <FormRegister />
        <OurAccomplishments />
        <OurRecognitions />
        <OurProjects/>
      </Container>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
