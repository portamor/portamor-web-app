import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
import logo from "@public/logo.png";
import Link from 'next/link';

const navItems = [
  { href: "#", name: "Programas" },
  { href: "#", name: "Membresía" },
  { href: "#", name: "Logros" },
  { href: "#", name: "Sobre Nosotros" },
]

interface NavBarProps {
  headerlinks: boolean
}

export default function NavBar({ headerlinks }: NavBarProps) {
  return (
    <AppBar position="fixed" component="nav">
      <Toolbar sx={{ backgroundColor: "white" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MuiLink component={Link} href='/'>
            <Typography variant='h6' color='black' component='div'>
              <Image src={logo} alt='logo portamor' />
            </Typography>
          </MuiLink>
          {
            headerlinks && (
            <Box
              width='50%'
              display='flex'
              justifyContent='space-around'
              sx={{ fontSize: (theme) => theme.typography.body2 }}
            >
              <MuiLink component={Link} href='http://18.219.152.230' underline='hover' color='black' mx={1}>
                Cursos
              </MuiLink>
                <MuiLink component={Link} href="/proyectos">
                Proyectos
              </MuiLink>
              <MuiLink component={Link}  href='/talleres' underline='hover' color='black' mx={1}>
                Talleres
              </MuiLink>
            </Box>
            )
          }
          {
            headerlinks && (
              <Box>
                <Button variant='contained'>
                  <MuiLink component={Link} href='/registrarse'>
                    Registrarse
                  </MuiLink>
                </Button>
              </Box>
            )
          }
        </Container>
      </Toolbar>
    </AppBar>
  )
}
