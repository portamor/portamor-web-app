import { Box, Button, Container, Link, Modal, Stack, Typography } from "@mui/material"
import {
  Banner,
  FormRegister,
  OurAccomplishments,
  OurAdvantages,
  OurBenefits,
  OurMemberShips,
  OurPrograms,
} from "@src/modules/landing/components"
import Head from "next/head"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Layout from "@src/modules/shared/components/layout"
import { useState } from "react"
import { OurRecognitions } from "@src/modules/landing/components/OurRecognitions/OurRecognitions"

function MyModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="video-modal-title"
      aria-describedby="video-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          width: "90%",
          maxWidth: 800,
          bgcolor: "background.paper",
          border: "3px solid #000",
          boxShadow: 24,
          p: 3,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography id="video-modal-description" sx={{ mt: 2, width: "100%" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", width: "100%" }}>
            <iframe
              src="https://www.youtube.com/embed/2BYMUkh-jRY?rel=0"
              title="YouTube video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Typography>
        <Button onClick={handleClose}>Cerrar</Button>
      </Box>
    </Modal>
  )
}

export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Head>
        <title>Portamor - Primera Escuela Integral del adulto mayor</title>
        <meta
          name="description"
          content="Plataforma que promueve el envejecimiento activo y saludable e involucra a la familia a una vida plena, activa y conectada"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Add SEO meta tags */}
        <meta
          name="keywords"
          content="Portamor, envejecimiento activo, salud física, salud mental, participación social, Alimentación Saludable"
        />
        <meta name="author" content="portamor team" />
        <meta name="robots" content="index, follow" />
        {/* Add Open Graph meta tags */}
        <meta property="og:title" content="Portamor - Envejecimiento activo" />
        <meta
          property="og:description"
          content="Plataforma que promueve el envejecimiento activo y saludable e involucra a la familia a una vida plena, activa y conectada"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.portamor.com" />
        <meta property="og:type" content="website" />
        {/* Add Twitter Card meta tags */}
        <meta name="twitter:card" content="/logo.png" />
        <meta name="twitter:title" content="Portamor - Envejecimiento activo" />
        <meta
          name="twitter:description"
          content="Plataforma que promueve el envejecimiento activo y saludable e involucra a la familia a una vida plena, activa y conectada"
        />
        <meta name="twitter:image" content="/logo.png" />
        {/* Add more Open Graph meta tags */}
        <meta property="og:locale" content="es_pe" />
        <meta property="og:site_name" content="Portamor" />
      </Head>
      <Banner />
      <Container maxWidth="lg">
        <Box mb={4}>
          <Typography
            variant="h4"
            component="h2"
            fontWeight={theme => theme.typography.fontWeightBold}
            textAlign="center"
            mb={3}
          >
            Propósito{" "}
            <Typography variant="inherit" component="span" color={theme => theme.palette.primary.main}>
              Portamor
            </Typography>
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 1, sm: 2 }}
          >
            <Typography
              variant="body2"
              textAlign={{ xs: "center", sm: "left" }}
              mr={{ xs: 0, sm: 2 }}
              width={{ xs: "100%", sm: "calc(100% - 200px)" }}
            >
              Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud
              física, mental y social que venimos compartiendo y construyendo con nuestra comunidad portamor.
              <br />
              <Link
                href=""
                underline="hover"
                color="primary"
                mt={1}
                display="inline-block"
                onClick={event => {
                  event.preventDefault()
                  handleOpenModal()
                }}
              >
                Ver video
              </Link>
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() => {
                window.location.href = "https://api.whatsapp.com/send?phone=943203772&text=%C2%A1Hola%20Portamor!"
              }}
            >
              Conocer más
            </Button>
          </Stack>
        </Box>
        <OurPrograms />
        <OurBenefits />
        <OurAdvantages />
        <OurMemberShips />
        <FormRegister />
        <OurAccomplishments />
        <OurRecognitions />
      </Container>
      <MyModal open={openModal} handleClose={handleCloseModal} />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
