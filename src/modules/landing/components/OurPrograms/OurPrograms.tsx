import {
  Box,
  Tab,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useState } from "react";
import { ProgramsTabs } from "./styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import estimulation from "@public/benefits/estimulation.jpg";
import legals from "@public/benefits/legals.jpg";
import technology from "@public/benefits/technology.jpg";
import therapy from "@public/benefits/therapy.jpg";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const dataTabs = [
  {
    title: "Participación Social",
    content: `La participación social del adulto mayor es clave para su bienestar y 
      la construcción de una sociedad más justa e inclusiva. A través de su experiencia y conocimientos, 
      pueden aportar a la comunidad en diferentes ámbitos como la cultura, el deporte, la política y 
      la educación. Además, la participación social puede mejorar su salud física y mental, 
      ya que les brinda un sentido de pertenencia y propósito.`,
  },
  {
    title: "Activación física",
    content: `Un programa de activación física para el adulto mayor centrado en mejorar la salud y el bienestar 
        general de las personas mayores a través de ejercicios específicos adaptados a su capacidad física. 
        El programa incluye ejercicios de calentamiento para preparar los músculos antes de la actividad física, 
        ejercicios aeróbicos para mejorar la capacidad cardiovascular, ejercicios de fortalecimiento muscular y 
        flexibilidad para mejorar la movilidad y el equilibrio, y actividades de enfriamiento para reducir 
        la tensión muscular.`,
  },
  {
    title: "Bienestar mental",
    content: `Un programa de bienestar mental para el adulto mayor incluye una variedad de actividades 
      que promuevan la salud mental y emocional en esta población. Algunas de estas actividades incluyen 
      ejercicios de relajación, actividades sociales y de interacción con otros adultos mayores, 
      terapia individual y grupal, talleres y clases de educación sobre temas de salud y bienestar, 
      y exploración de nuevas habilidades y pasatiempos.`,
  },
  {
    title: "Alimentación saludable",
    content: `El adulto mayor debe seguir un programa de alimentación saludable para mantener su bienestar, 
      prevenir enfermedades y mejorar su calidad de vida. Es necesario que su dieta sea equilibrada, variada 
      y rica en nutrientes como proteínas, vitaminas y minerales. Es por ello que nuestro programa de 
      alimentación saludable es rico en fibra, así como frutas, verduras, cereales y legumbres, y evitamos 
      los alimentos procesados y altos en grasas saturadas y azúcares refinados.`,
  },
];

const dataServices = [
  {
    title: "Risoterapia",
    urlImage: therapy,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Estimulación cognitiva",
    urlImage: estimulation,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Aspectos legales",
    urlImage: legals,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
  {
    title: "Tecnología",
    urlImage: technology,
    content:
      "Empoderar a más adultos mayores hacia un envejecimiento activo y saludable para fortalecer la salud",
  },
];

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant='body2'>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export const OurPrograms = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography
        variant='h4'
        component='h2'
        fontWeight={(theme) => theme.typography.fontWeightBold}
        textAlign='center'
        mb={3}
      >
        Explora nuestros programas
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ProgramsTabs
          value={value}
          onChange={handleChange}
          aria-label='programs tabs'
        >
          {dataTabs.map((x, i) => (
            <Tab key={i} label={x.title} />
          ))}
        </ProgramsTabs>
      </Box>
      {dataTabs.map((x, i) => (
        <TabPanel key={i} value={value} index={i}>
          {x.content}
        </TabPanel>
      ))}
      <Stack direction='row' spacing={2}>
        {dataServices.map((x, i) => (
          <Card key={i}>
            <CardActionArea>
              <CardMedia sx={{ height: 280 }}>
                <Box position='relative' height='100%' width='100%'>
                  <Image
                    src={x.urlImage}
                    alt={x.title}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='body2' component='div'>
                  {x.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {x.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", mb: 2 }}>
              <Button
                variant='contained'
                size='small'
                color='primary'
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  window.location.href = 'https://api.whatsapp.com/send?phone=943203772&text=%C2%A1Hola%20Portamor!'
                }}
              >
                Unirse ahora
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
