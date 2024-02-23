import { Box, Container, Typography, Grid, IconButton } from "@mui/material"
import Image from "next/image"
import heart from "@public/heart.png"
import icWsp from "@public/icons/ic-wsp.svg"
import icGmail from "@public/icons/ic-gmail.svg"
import icFb from "@public/icons/ic-facebook.svg"
import icIns from "@public/icons/ic-instagram.svg"
import icLink from "@public/icons/ic-linkedin.svg"
import icYt from "@public/icons/ic-youtube.svg"

export const Footer = () => {
  return (
    <Box component="footer" mt={4} sx={{ background: theme => theme.palette.custom.black0B }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} color={theme => theme.palette.common.white} py={3}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image src={heart} alt="portamor" />
              <Typography color="inherit" gutterBottom mt={3}>
                Portamor - Envejecimiento activo
              </Typography>
              <Typography color="inherit" variant="caption">
                © 2023 Portamor Tech - All rights reserved
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign={{ xs: "center", sm: "left" }}>
              <Typography color="inherit" my={4} fontWeight="medium">
                Contáctanos
              </Typography>
              <Box display="flex" flexDirection="column" alignItems={{ xs: "center", sm: "flex-start" }}>
                <Box display="flex" alignItems="center">
                  <Image src={icWsp} alt="icon whatsapp" />
                  <Typography variant="body2" color="inherit" ml={2}>
                    +51 943203772
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mt={2}>
                  <Image src={icGmail} alt="icon gmail" />
                  <Typography variant="body2" color="inherit" ml={2}>
                    portamor.pe@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign={{ xs: "center", sm: "left" }}>
              <Typography color="inherit" my={4} fontWeight="medium">
                Síguenos
              </Typography>
              <Box textAlign={{ xs: "center", sm: "left" }}>
                <IconButton href="https://www.facebook.com/Portamor.pe" target="_blank" color="inherit">
                  <Image src={icFb} alt="icon facebook" />
                </IconButton>
                <IconButton href="https://www.instagram.com/portamor.pe/?hl=es" target="_blank" color="inherit">
                  <Image src={icIns} alt="icon instagram" style={{ marginLeft: 20 }} />
                </IconButton>
                <IconButton href="https://www.linkedin.com/company/portamor" target="_blank" color="inherit">
                  <Image src={icLink} alt="icon linkedin" style={{ marginLeft: 20 }} />
                </IconButton>
                <IconButton
                  href="https://www.youtube.com/@portamorcomunidaddeadultos3376"
                  target="_blank"
                  color="inherit"
                >
                  <Image src={icYt} alt="icon youtube" style={{ marginLeft: 20 }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
