import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "@public/logo.png";
import Link from 'next/link';

const navItems = ["Programas", "Membresía", "Logros", "Sobre Nosotros"];

export default function NavBar() {
  return (
    <AppBar position='fixed' component='nav'>
      <Toolbar sx={{ backgroundColor: "white" }}>
        <Container
          maxWidth='lg'
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href='/'>
            <Typography variant='h6' color='black' component='div'>
              <Image src={logo} alt='logo portamor' />
            </Typography>
          </Link>
          <Box
            width='50%'
            display='flex'
            justifyContent='space-around'
            sx={{ fontSize: (theme) => theme.typography.body2 }}
          >
            <Link href='http://18.219.152.230' underline='hover' color='black' mx={1}>
              Cursos
            </Link>
            <Link href="/proyectos">
              Proyectos
            </Link>
            <Link href='/talleres' underline='hover' color='black' mx={1}>
              Talleres
            </Link>
          </Box>
          <Box>
            <Button variant='contained'>Registrarse</Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
