import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BoxBackground, BoxCircle, CardItem } from "./styled";
import Image from "next/image";
import icCheck from "@public/icons/ic-check.svg";
import heart from "@public/heart.png";

export const OurMemberShips = () => {
  const memberships = [
    {
      price: 0,
      title: "Club Básico",
      details: [
        "Acceso limitado  en actividades grupales en línea.",
        "Contenido educativo básico sobre envejecimiento activo y saludable",
      ],
    },
    {
      price: 49,
      title: "Club Bronce",
      details: [
        "Eventos grupales en línea de: \n\n Activación física, nutrición, participación social y bienestar mental.",
        "Acceso a comunidad en línea",
      ],
    },
    {
      price: 79,
      title: "Club Plateado",
      details: [
        "Conceptos de Club de Bronce",
        "Diagnóstico",
        "Acceso a plataforma",
      ],
    },
    {
      price: 129,
      important: true,
      title: "Club Oro",
      details: [
        "Conceptos de Club Plateado",
        "Asesoramiento personalizado sobre nutrición y bienestar",
        "Descuentos en productos complementarios",
        "Acceso a eventos y actividades exclusivas de impacto social",
      ],
    },
  ];

  const transformTitle = (text: string) => {
    let parts = text.split(" ");
    return (
      <>
        {`${parts[0]} `}
        <Typography
          variant='inherit'
          component='span'
          color={(theme) => theme.palette.primary.main}
        >
          {parts[1]}
        </Typography>
      </>
    );
  };

  return (
    <Box mt={5}>
      <Typography
        variant='h4'
        component='h2'
        fontWeight={(theme) => theme.typography.fontWeightBold}
        textAlign='center'
        mb={5}
      >
        Elige tu membresía favorita
      </Typography>
      <Box sx={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <BoxCircle />
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
          {memberships.map((x, i) => (
            <Grid item key={i} xs={3} textAlign='center' position='relative'>
              <CardItem data-important={x.important}>
                {x.important && (
                  <>
                    <BoxBackground />
                    <Box
                      sx={{ zIndex: 1, position: "absolute", right: "5px" }}
                    >
                      <Image src={heart} alt='portamor' />
                    </Box>
                  </>
                )}
                <Box position='relative' zIndex={1} mb={1}>
                  <Typography
                    px={2}
                    variant='h4'
                    fontWeight={(theme) => theme.typography.fontWeightBold}
                  >
                    S/. {x.price}
                  </Typography>
                  <Typography
                    px={2}
                    variant='h6'
                    fontWeight={(theme) => theme.typography.fontWeightBold}
                  >
                    {transformTitle(x.title)}
                  </Typography>
                </Box>
                <List sx={{ flexGrow: 1 }}>
                  {x.details.map((detail, j) => (
                    <ListItem key={j} alignItems='flex-start'>
                      <ListItemAvatar>
                        <Image src={icCheck} alt='check' />
                      </ListItemAvatar>
                      <ListItemText secondary={<>{detail}</>} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant='contained'
                  size='small'
                  color='primary'
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => {
                    window.location.href = 'https://api.whatsapp.com/send?phone=943203772&text=%C2%A1Hola%20Portamor!'
                  }}
                >
                  Elegir este plan
                </Button>
              </CardItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
