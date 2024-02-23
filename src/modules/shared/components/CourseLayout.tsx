import { Box } from "@mui/material"
import { Footer } from "../../landing/components"
import { CoursesNavBar } from "./CoursesNavBar/CoursesNavBar"

export default function CourseLayout({ children }) {
  return (
    <>
      <CoursesNavBar />
      <Box component="main" mt={8}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
