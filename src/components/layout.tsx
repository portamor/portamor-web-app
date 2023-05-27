import { Box } from "@mui/material";
import NavBar from "./Home/NavBar/NavBar";
import { Footer } from "./Home";

export default function Layout({ children }) {
  return (
    <>
      <NavBar/>
      <Box component="main" mt={8}>{children}</Box>
      <Footer/>
    </>
  );
}
