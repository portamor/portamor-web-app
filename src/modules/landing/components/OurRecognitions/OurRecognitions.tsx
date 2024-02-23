import React from "react"
import Carousel from "react-multi-carousel"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import { Box, Typography } from "@mui/material"

import "react-multi-carousel/lib/styles.css"
import apnoticias from "@public/recognitions/apnoticias.png"
import clubleones from "@public/recognitions/clubleones.png"
import comunidaria from "@public/recognitions/comunidaria.png"
import constanciaMinedu from "@public/recognitions/constanciaMinedu.png"
import findhealthclinics from "@public/recognitions/findhealthclinics.png"
import cronicasdeportamorojo from "@public/recognitions/cronicasdeportamorojo.png"
import elperuano from "@public/recognitions/elperuano.png"
import emprendeUP from "@public/recognitions/emprendeUP.jpg"
import eyng from "@public/recognitions/eyng.png"
import henry from "@public/recognitions/henry.png"
import incubaUNACH from "@public/recognitions/incubaUNACH.jpg"
import juntaplateada from "@public/recognitions/juntaplateada.png"
import nativa from "@public/recognitions/nativa.png"
import newmonitor from "@public/recognitions/newmonitor.png"
import ojo1 from "@public/recognitions/ojo1.png"
import ojo2 from "@public/recognitions/ojo2.png"
import peru21 from "@public/recognitions/peru21.png"
import radiofama from "@public/recognitions/radiofama.png"
import radionacional from "@public/recognitions/radionacional.png"
import rcc from "@public/recognitions/rcc.png"
import revistasaludyfamilia from "@public/recognitions/revistasaludyfamilia.png"
import tacnainnova from "@public/recognitions/tacnainnova.png"
import turistech from "@public/recognitions/turistech.png"
import uno from "@public/recognitions/uno.png"
import upn from "@public/recognitions/upn.png"
import UPTincuba from "@public/recognitions/UPTIncuba.jpg"

export const OurRecognitions: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  const items = [
    {
      title: "Conectarse para Crecer",
      subtitle: "proyectos que promueven el desarrollo",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: eyng.src,
      knowMore: "https://www.facebook.com/radiouno.pe/videos/897153368338156",
    },
    {
      title: "RCC Tacna",
      subtitle: "proyectos que promueven el desarrollo",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: rcc.src,
      knowMore: "https://www.facebook.com/RadioRCC99.3fmTacna/videos/273833821574688",
    },
    {
      title: "Radio Uno - Tacna",
      subtitle: "proyectos que promueven el desarrollo",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: uno.src,
      knowMore: "https://www.facebook.com/radiouno.pe/videos/897153368338156",
    },
    {
      title: "Entrevista a los ganadores de la iniciativa Conectarse para Crecer",
      subtitle: "Entrevista a los ganadores de la iniciativa Conectarse para Crecer",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: nativa.src,
      knowMore: "http://www.newsmonitor.biz/Viewer/video.aspx?id=48350335488&CLI=137",
    },
    {
      title: "una plataforma que promueve el envejecimiento activo y saludable",
      subtitle: "portamor una plataforma que promueve el envejecimiento activo y saludable",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: ojo1.src,
      knowMore:
        "https://ojo.pe/mujer/portamor-una-plataforma-que-promueve-el-envejecimiento-activo-y-saludable-web-ojo-noticia/",
    },
    {
      title: "promovemos un envejecimiento activo y saludable",
      subtitle: "portamor una plataforma que promueve el envejecimiento activo y saludable",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: ojo2.src,
      knowMore:
        "http://www.newsmonitor.biz/Viewer/postview.aspx?CLI=137&PAU=4829338&CLIP=3562982&AspxAutoDetectCookieSupport=1",
    },
    {
      title: "Buenas practicas de de voluntariado - El peruano",
      subtitle: "Otorgan el Reconocimiento Nacional de Buenas Prácticas de Voluntariado, Edición 2022",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: elperuano.src,
      knowMore:
        "https://busquedas.elperuano.pe/normaslegales/otorgan-el-reconocimiento-nacional-de-buenas-practicas-de-vo-resolucion-ministerial-n-332-2022-mimp-2131433-1/",
    },
    {
      title: "Emprende UP",
      subtitle: "Otorgan el Reconocimiento Nacional de Buenas Prácticas de Voluntariado, Edición 2022",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: emprendeUP.src,
      knowMore: "https://www.facebook.com/100044286706521/videos/1281223879458905",
    },
    {
      title: "Turistech",
      subtitle: "Turistech - Semana por el dia internacional de la mujer 2023",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: turistech.src,
      knowMore: "https://fb.watch/jlBhgWBh7b/",
    },
    {
      title: "News Monitor",
      subtitle: "Conoce los emprendimientos liderados por mujeres que promueven el desarrollo",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: newmonitor.src,
      knowMore: "https://www.newsmonitor.biz/Viewer/postview.aspx?PAU=4950328&CLI=137&CLIP=3661324",
    },
    {
      title: "Tacna Innova",
      subtitle: "Conoce los emprendimientos liderados por mujeres que promueven el desarrollo",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: tacnainnova.src,
      knowMore: "https://www.facebook.com/regiontacna.gob.pe/videos/459418319642934",
    },
    {
      title: "Grupo Henry",
      subtitle: "Creación de la plataforma de cursos virtuales para adultos mayores",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: henry.src,
      knowMore: "https://www.youtube.com/watch?v=qZu37TWldrQ&ab_channel=Henry",
    },
    {
      title: "UTP Incuba",
      subtitle: "Innovar para Emprender con Impacto Social",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: UPTincuba.src,
      knowMore:
        "https://www.facebook.com/UPTIncuba/posts/pfbid0vr26fdziP3RWAaqY3afDQwr8qxd7i4E5UddubC7GxQ3UVXMGFsdQP2VYW45YqZPpl",
    },
    {
      title: "Demoday Incuba UNACH",
      subtitle: "Presentación de Demo day UNACH 2023",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: incubaUNACH.src,
      knowMore: "https://fb.watch/kWbMwX8Vwa/",
    },
    {
      title: "UPN",
      subtitle: "Portamor - amor eterno",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: upn.src,
      knowMore: "https://www.youtube.com/watch?v=6pv-NKx-6gk",
    },
    {
      title: "Radio Fama",
      subtitle: "Radio y revista fama peru, entrevista a portamor",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: radiofama.src,
      knowMore: "https://fb.watch/mmosaBPgSh/?mibextid=cr9u03",
    },
    {
      title: "Crónicas portamor ojo",
      subtitle: "Portamor, la escuela de bienestar integral que empodera a adultos mayores",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: cronicasdeportamorojo.src,
      knowMore:
        "https://ojo.pe/ciudad/portamor-la-escuela-de-bienestar-integral-que-empodera-a-adultos-mayores-noticia/",
    },
    {
      title: "Crónicas portamor",
      subtitle: "escuela de bienestar integral que empodera a adultos mayores",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: comunidaria.src,
      knowMore: "https://comunidaria.com/portamor-escuela-de-bienestar-integral-que-empodera-a-adultos-mayores/",
    },
    {
      title: "Revista Salud y Familia",
      subtitle: "“Portamor”: escuela de bienestar integral que empodera a adultos",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: revistasaludyfamilia.src,
      knowMore:
        "https://www.revistasaludyfamilia.com/portamor-escuela-de-bienestar-integral-que-empodera-a-adultos-mayores/",
    },
    {
      title: "Peru 21",
      subtitle: "“Portamor”: Escuela de bienestar integral que empodera a adultos mayores",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: peru21.src,
      knowMore:
        "https://peru21.pe/cheka/portamor-adultos-mayores-escuela-bienestar-portamor-escuela-de-bienestar-integral-que-empodera-a-adultos-mayores-noticia/",
    },
    {
      title: "ap noticias",
      subtitle: "“Portamor”: Escuela de bienestar integral que empodera a adultos mayores",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: apnoticias.src,
      knowMore:
        "https://www.apnoticias.pe/peru/diario-peru21/portamor-escuela-de-bienestar-integral-que-empodera-a-adultos-mayores-1055393",
    },
    {
      title: "Radio Nacional",
      subtitle: "“Portamor”: Escuela de bienestar integral que empodera a adultos mayores",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: radionacional.src,
      knowMore: "https://www.youtube.com/watch?v=TXOPuxZHGd8&ab_channel=RadioNacional",
    },
    {
      title: "Testinomio de Club de Leones",
      subtitle: "“Portamor”: Escuela de bienestar integral que empodera a adultos mayores",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: clubleones.src,
      knowMore: "https://fb.watch/nA0gVRBf0D/?mibextid=RUbZ1f",
    },
    {
      title: "III Junta plateada",
      subtitle: "“Portamor”: Escuela de bienestar integral que empodera a adultos mayores",
      /*content: "Finalistas a nivel nacional del evento más importante y de mayor exposición sobre el emprendimiento social en el Perú",*/
      urlImage: juntaplateada.src,
      knowMore: "https://www.youtube.com/watch?v=hF6nGuqZTZ0",
    },
  ]

  return (
    <Box mt={5}>
      <Typography
        variant="h4"
        component="h2"
        fontWeight={theme => theme.typography.fontWeightBold}
        textAlign="center"
        mb={5}
      >
        Nuestros Reconocimientos
      </Typography>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        rewindWithAnimation={true}
      >
        {items.map((item, index) => (
          <div key={index}>
            <Card sx={{ maxWidth: 345, width: "100%" }}>
              <CardMedia sx={{ height: 140, maxWidth: "100%" }} image={item.urlImage.toString()} title={item.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom component="div">
                  {item.subtitle}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => window.open(item.knowMore, "_blank")}>
                  Saber más
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </Carousel>
    </Box>
  )
}
