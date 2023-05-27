import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import koica from "@public/accomplishments/koica.png";
import kunan from "@public/accomplishments/kunan.png";
import mimp from "@public/accomplishments/mimp.png";
import movistar from "@public/accomplishments/movistar.png";

const accomplishments = [
  {
    title: "Finalistas del desafío Kunan",
    subtitle: "En la categoría Adultos imparables",
    content:
      "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",
    urlImage: kunan,
  },
  {
    title: "Finalista del startup league",
    subtitle: "En la categoría Educación",
    content:
      "De más de 113 startups postuladas hemos sido finalistas de Koica Peru Startup League - Etapa Nacional - Aceleración.",
    urlImage: koica,
  },
  {
    title: "Conectar para Crecer 2022",
    subtitle: "En la categoría Educación",
    content:
      "Ganadores del voto del público con más de 1000 reacciones frente a los finalistas de todas las categorías.",
    urlImage: movistar,
  },
  {
    title: "Ministerio de la mujer",
    subtitle: "Dirección General de Población, Desarrollo y Voluntariado",
    content:
      "Reconocimiento por nuestras acciones de voluntariado a nivel nacional.",
    urlImage: mimp,
  },
];

export const OurAccomplishments = () => {
  return (
    <Box mt={5}>
      <Typography
        variant='h4'
        component='h2'
        fontWeight={(theme) => theme.typography.fontWeightBold}
        textAlign='center'
        mb={5}
      >
        Nuestro Logros
      </Typography>
      <Grid container spacing={2}>
        {accomplishments.map((x, i) => (
          <Grid item key={i} xs={3} display="flex">
            <Box
              p={2}
              boxShadow={(theme) => theme.shadows[1]}
              textAlign='center'
            >
              <Box height={170}>
                <Image
                  src={x.urlImage}
                  alt={x.title}
                  style={{ objectFit: "contain", width: "100%" }}
                />
              </Box>
              <Typography gutterBottom color='primary' mb={2}>
                {x.title}
              </Typography>
              <Typography gutterBottom color='text.secondary' mb={2}>
                {x.subtitle}
              </Typography>
              <Typography color='text.secondary'>{x.content}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
