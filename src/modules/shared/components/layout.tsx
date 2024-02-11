import { Box } from "@mui/material";
import NavBar from "../../landing/components/NavBar/NavBar";
import { Footer } from "../../landing/components";

export default function Layout({headerlinks=true, children }) {
  return (
    <>
      <NavBar headerlinks={headerlinks}/>
      <Box component="main" mt={8}>{children}</Box>
      <Footer/>
    </>
  );
}
