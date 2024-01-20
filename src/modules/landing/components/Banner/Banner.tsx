import Image from "next/image";
import banner from "@public/banner.png";
import logo360 from "@public/360.svg";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BannerOpinion } from "../BannerOpinion/BannerOpinion";

export const Banner = () => {
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
  ];
  return (
    <Box p={4} sx={{ height: 705, overflow: "hidden" }}>
      <Container maxWidth='lg' sx={{ position: "relative" }}>
        <Image
          src={banner}
          height={700}
          alt='banner portamor'
          style={{
            position: "absolute",
            right: -137,
            top: -58,
            zIndex: -1,
          }}
        />
        {OPINIONS.map((opinion, i) => (
          <BannerOpinion key={i} position={i + 1} {...opinion} />
        ))}
        <Box sx={{ maxWidth: 835 }}>
          <Typography
            variant='h2'
            component='h1'
            fontWeight={(theme) => theme.typography.fontWeightBold}
          >
            Primera escuela integral del adulto mayor <br /> en el Perú
          </Typography>
          <Typography
            mt={4}
            fontWeight={(theme) => theme.typography.fontWeightBold}
          >
            Disfruta vivir en modo:
          </Typography>
          <Box mt={3} mb={6} display='flex'>
            <Typography
              variant='h4'
              color='primary'
              fontWeight={(theme) => theme.typography.fontWeightBold}
              lineHeight={1}
              mr={2}
            >
              ADULTO <br /> MAYOR
            </Typography>
            <Image src={logo360} alt='adulto mayor 360' />
          </Box>
          <Button
            variant='contained'
            size='large'
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontSize: (theme) => theme.typography.h6,
              fontWeight: (theme) => theme.typography.fontWeightMedium,
              py: 2,
              px: 4,
            }}
            onClick={() => {
              window.location.href = 'https://api.whatsapp.com/send?phone=943203772&text=%C2%A1Hola%20Portamor!'
            }}
          >
            Únete ahora
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
