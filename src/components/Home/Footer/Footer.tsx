import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import heart from "@public/heart.png";
import icWsp from "@public/icons/ic-wsp.svg";
import icGmail from "@public/icons/ic-gmail.svg";
import icFb from "@public/icons/ic-facebook.svg";
import icIns from "@public/icons/ic-instagram.svg";
import icLink from "@public/icons/ic-linkedin.svg";
import icYt from "@public/icons/ic-youtube.svg";

export const Footer = () => {
  return (
    <Box
      component='footer'
      mt={4}
      sx={{ background: (theme) => theme.palette.custom.black0B }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={2} color={(theme) => theme.palette.common.white} py={3}>
          <Grid item xs={4}>
            <Image src={heart} alt="portamor" />
            <Typography color="inherit" gutterBottom mt={3}>Portamor - Envejecimiento activo</Typography>
            <Typography color="inherit" variant="caption">© 2023 Portamor Tech - All rights reserved</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography color="inherit" my={4} fontWeight="medium">Contáctanos</Typography>
            <Box display="flex" alignItems="center">
              <Image src={icWsp} alt="icon whatsapp" />
              <Typography variant="body2" color="inherit" ml={2}>+51 999999999</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              <Image src={icGmail} alt="icon gmail" />
              <Typography variant="body2" color="inherit" ml={2}>portamor.pe@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography color="inherit" my={4} fontWeight="medium">Síguenos</Typography>
            <Box>
              <Image src={icFb} alt="icon facebook" />
              <Image src={icIns} alt="icon instagram" style={{ marginLeft: 20 }} />
              <Image src={icLink} alt="icon linkedin" style={{ marginLeft: 20 }} />
              <Image src={icYt} alt="icon youtube" style={{ marginLeft: 20 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
