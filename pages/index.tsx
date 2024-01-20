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

export default function Home() {
  return (
    <>
      <Head>
        <title>Comunidad Portamor</title>
        <meta name='description' content='Portal del evejecimiento activo para el adulto mayor' />
        <link rel='icon' href='/favicon.ico' />
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
      </Container>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
