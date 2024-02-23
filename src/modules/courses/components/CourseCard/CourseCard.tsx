import React from "react"
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material"
// import * as actions from "../../Migration/Redux/actions";
import Link from "next/link"
import { useRouter } from "next/router"
import Edit from "@mui/icons-material/Edit"
import Delete from "@mui/icons-material/Delete"
import Swal from "sweetalert2"
import { useAppDispatch, useAppSelector } from "@src/modules/shared/redux/hooks/useApp"

export const CourseCard = ({ id, title, image, duration, level }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const isAdmin = useAppSelector(state => state.user.admin)

  const handleRemove = e => {
    // REVISAR
    e.preventDefault()
    Swal.fire({
      title: "¿Estás seguro de que deseas borrar este curso?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then(result => {
      if (result.isConfirmed) {
        // dispatch(actions.deleteCourse(id));
        Swal.fire("¡Borrado!", "El curso ha sido borrado.", "success") /* .then(
          () => {
            window.location.reload();
          }
        ) */
      }
    })
  }

  return (
    <Card variant="outlined">
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent sx={{ textAlign: "center" }}>
        {isAdmin && (
          <Box>
            <Link
              href={{
                pathname: "/dashboard",
                // TODO: Tengo que pasar el state={id}
              }}
            >
              <Edit color="primary" />
            </Link>
            <Delete color="primary" onClick={handleRemove} style={{ cursor: "pointer" }} />
          </Box>
        )}
        <Typography variant="h5" mb={2}>
          {title}
        </Typography>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Box>
            <Typography variant="body1">{duration}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">{level}</Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            router.push({
              pathname: "/course-detail/[slug]",
              query: { slug: id },
            })
          }}
        >
          Ver Más
        </Button>
      </CardContent>
    </Card>
  )
}
