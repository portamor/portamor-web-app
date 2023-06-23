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
      price: 49,
      title: "Club Bronce",
      details: [
        "Eventos virtuales en vivo grupales de: \n\n Activacion física, participación social, nutrición y bienestar mental.",
        "Accesos de talleres de  lanzamiento de emprendimientos innovadores.",
        "Acceso a eventos de fechas festivas exclusivas según programación",
      ],
    },
    {
      price: 129,
      title: "Club Oro",
      details: [
        "Talleres de activacion física, participación social, nutrición y bienestar mental.",
        "Incluye los conceptos del Club Portamor.",
        "Cursos grabados ilimitados",
        "Acceso de canal de mentorias como soporte personalizado",
        "Programas de talleres personalizados con nuestros especialistas deacuerdo a tu diagnóstico",
      ],
    },
    {
      price: 79,
      title: "Club Plateado",
      details: [
        "Incluye los conceptos del Club Basico de membresia",
        "Talleres y cursos de emprendimiento en vivo",
        "Conversatorios de bienestar mental y legal",
        "Beneficio de 20% de descuento de cursos grabados",
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
        <Grid container spacing={3}>
          {memberships.map((x, i) => (
            <Grid item key={i} xs={4} textAlign='center'>
              <CardItem data-position={i + 1}>
                {i === 1 && (
                  <>
                    <BoxBackground />
                    <Box
                      sx={{ zIndex: 1, position: "absolute", right: "36px" }}
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
