import React, { ReactElement } from "react"
import { Box, Stack, Typography, Card, CardActionArea } from "@mui/material"
import { LandingLayout } from "@src/modules/shared/components"

export default function WorkshopsPage() {
  const dataServices = [
    {
      title: "taller1",
      src: "/talleres/taller1.mp4",
      thumbnail: "/talleres/taller1.png",
      content: "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "taller2",
      src: "/talleres/taller2.mp4",
      thumbnail: "/talleres/taller2.png",
      content: "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
    {
      title: "taller3",
      src: "/talleres/taller3.mp4",
      thumbnail: "/talleres/taller3.png",
      content: "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
    },
  ]

  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        fontWeight={theme => theme.typography.fontWeightBold}
        textAlign="center"
        mb={5}
      >
        Nuestros Talleres
      </Typography>
      <Stack direction={"row"} spacing={2} display="flex" justifyContent="center" flexWrap="wrap">
        {dataServices.map((item, index) => {
          return (
            <Card sx={{ minWidth: "40%" }} key={index}>
              <CardActionArea>
                <Box position="relative" height="100%" width="100%">
                  <video width="100%" height="300" controls preload="none" poster={item.thumbnail}>
                    <source src={item.src} type="video/mp4" />
                    <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
                  </video>
                </Box>
              </CardActionArea>
            </Card>
          )
        })}
      </Stack>
    </>
  )
}

WorkshopsPage.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>
}
