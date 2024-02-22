import { AppBar, Box, Button, Container, Link, Toolbar, Typography } from "@mui/material"
import Image from "next/image"
import logo from "@public/logo.png"

const navItems = [
  { href: "#", name: "Programas" },
  { href: "#", name: "Membresía" },
  { href: "#", name: "Logros" },
  { href: "#", name: "Sobre Nosotros" },
]

export default function NavBar() {
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
          <Typography variant="h6" color="black" component="div">
            <Image src={logo} alt="logo portamor" />
          </Typography>
          <Box display="flex" alignItems="center" sx={{ fontSize: theme => theme.typography.body2 }}>
            {/* {navItems.map((item) => (
              <Link href={href} underline='hover' color='black' key={item} mx={1}>
                {item}
              </Link>
            ))} */}
          </Box>
          <Box>
            <Button variant="contained">Registrarse</Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
