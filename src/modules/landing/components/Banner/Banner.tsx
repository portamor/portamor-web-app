import Image from "next/image"
import banner from "@public/banner.png"
import logo360 from "@public/360.svg"
import { Box, Button, Container, Typography } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { BannerOpinion } from "../BannerOpinion/BannerOpinion"
import { BoxBackground } from "./styled"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

export const Banner = () => {
  const theme = useTheme()
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const OPINIONS = [
    {
      urlImage: "https://picsum.photos/48/48",
      name: "Carmen Paucar",
      opinion: `Mi comunidad PORTAMOR me ha devuelto las ganas de seguir viviendo, con
        calidad, afecto y mucho amor, siento que mi vida tien aún mucho que
        aprender por dar, nos llaman y están pendiente de nosotros.Una vez más
        se cumple que para el estudio y el amor no hay edad. 🌹`,
    },
    {
      urlImage: "https://picsum.photos/48/48",
      name: "Mercedez Marchera",
      opinion: `Estoy agradecida de ser miembro de la comunidad Portamor 🌻, 
        aquí conocí muchas personas muy humanas que su mayor deseo es que los adultos 
        mayores sean útiles para ellos mismos y la sociedad.`,
    },
  ]
  return (
    <Box p={4} sx={{ height: 705, overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <BoxBackground />
        <Image
          src={banner}
          height={isScreenSmall ? 480 : 700}
          alt="banner portamor"
          style={{
            position: "absolute",
            right: isScreenSmall ? -10 : theme.breakpoints.up("md") ? -137 : 0,
            top: isScreenSmall ? 170 : theme.breakpoints.up("md") ? -58 : -20,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {isScreenSmall ? null : OPINIONS.map((opinion, i) => <BannerOpinion key={i} position={i + 1} {...opinion} />)}
        </Box>
        <Box sx={{ maxWidth: 835 }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight={theme => theme.typography.fontWeightBold}
            fontSize={{ xs: "3.1rem", md: "3rem", lg: "4rem" }}
          >
            Primera escuela integral del adulto mayor <br /> en el Perú
          </Typography>
          <Typography mt={4} fontWeight={theme => theme.typography.fontWeightBold}>
            Disfruta vivir en modo:
          </Typography>
          <Box mt={3} mb={6} display="flex">
            <Typography
              variant="h4"
              color="primary"
              fontWeight={theme => theme.typography.fontWeightBold}
              lineHeight={1}
              mr={2}
              fontSize={{ xs: "1.5rem", md: "2rem", lg: "2.5rem" }}
            >
              ADULTO <br /> MAYOR
            </Typography>
            <Image src={logo360} alt="adulto mayor 360" />
          </Box>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontSize: theme => theme.typography.h6,
              fontWeight: theme => theme.typography.fontWeightMedium,
              py: 2,
              px: 4,
            }}
            onClick={() => {
              window.location.href = "https://api.whatsapp.com/send?phone=943203772&text=%C2%A1Hola%20Portamor!"
            }}
          >
            Únete ahora
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
