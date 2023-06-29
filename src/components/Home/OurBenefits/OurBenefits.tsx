import { Box, Typography, Stack, Paper } from "@mui/material";
import Image from "next/image";
import comunities from "@public/icons/ic-comunities.svg";
import courses from "@public/icons/ic-courses.svg";
import meetings from "@public/icons/ic-meetings.svg";
import specialists from "@public/icons/ic-specialists.svg";
import workshops from "@public/icons/ic-workshops.svg";

export const OurBenefits = () => {
  const benefits = [
    { title: "Cursos", urlImage: courses },
    { title: "Talleres", urlImage: workshops },
    { title: "Conversatorios", urlImage: meetings },
    { title: "Especialistas", urlImage: specialists },
    { title: "Comunidades", urlImage: comunities },
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
        Beneficios
      </Typography>
      <Box>
        <Stack direction='row' justifyContent='center' spacing={10}>
          {benefits.map((x, i) => (
            <Paper key={i} sx={{ textAlign: "center" }} elevation={0}>
              <Image src={x.urlImage} alt={x.title} />
              <Typography>{x.title}</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
