import { Box, Typography, Stack, Paper } from "@mui/material";
import Image from "next/image";
import check from "@public/check.svg";

export const OurAdvantages = () => {
  const advantages = [
    "Acompañamiento con amor, enfoque preventivo y de autocuidado: Ofrecemos reporte de seguimiento con especialistas en nuestros programas.",
    "Basamos nuestros pilares de acción bajo las recomendaciones de la Organización Mundial de la Salud (OMS) para un envejecimiento activo y saludable.",
    "Beneficio por ser un socio activo a buenos descuentos, acceso a eventos presenciales con la comunidad más amorosa.",
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
        Ventajas
      </Typography>
      <Stack direction='column' spacing={2} maxWidth={945} margin='0 auto'>
        {advantages.map((x, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Image src={check} alt='check' />
            <Typography ml={4}>{x}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};
