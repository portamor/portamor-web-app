import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
import logo from "@public/logo.png";
import Link from 'next/link';

export const CoursesNavBar = () => {
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
        </Container>
      </Toolbar>
    </AppBar>
  )
}
