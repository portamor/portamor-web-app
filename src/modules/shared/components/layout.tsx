import { Box } from "@mui/material"
import NavBar from "../../landing/components/NavBar/NavBar"
import { Footer } from "../../landing/components"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Box component="main" mt={8}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
