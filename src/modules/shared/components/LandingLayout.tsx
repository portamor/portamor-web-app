import { Box } from "@mui/material"
import { LandingNavBar } from "./LandingNavBar/LandingNavBar"
import { Footer } from "../../landing/components"
import React from "react"

interface PublicLayoutProp {
  children: React.ReactNode
}

export const LandingLayout = ({ children }: PublicLayoutProp) => {
  return (
    <>
      <LandingNavBar />
      <Box component="main" mt={8}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
