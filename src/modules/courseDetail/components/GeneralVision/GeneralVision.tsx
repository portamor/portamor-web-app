import React from "react";
import Image from "next/image";
import { Button, Dialog } from "@mui/material";
import Swal from "sweetalert2";
import certificate from "@public/courses/certificate.png";
import styles from "./GeneralVision.module.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { useAppSelector } from "@src/modules/shared/redux/hooks";
import { Course, Instructor, Section } from "@src/modules/shared/models";
import { useInscribeUserMutation } from "@src/modules/courses/services/user.service";
import { CourseDetailCard } from "../CourseDetailCard/CourseDetailCard";

interface GeneralVisionProps {
  courseId: string;
  courseDetail: Course;
  courseSections: Section[];
  instructor: Instructor;
  isUserEnrolled: boolean;
}

export const GeneralVision = ({
  courseId,
  courseDetail,
  courseSections,
  instructor,
  isUserEnrolled,
}: GeneralVisionProps) => {
  const [open, setOpen] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const user = useAppSelector((state) => state.user);
  const [inscribeUser] = useInscribeUserMutation();

  const handleClickOpen = () => {
    if (user.isLoggedIn) {
      setIsUpdating(true);
      inscribeUser({ userId: user.id, courseId })
        .then(() => {
          Swal.fire({
            title: "Inscripción exitosa",
            text: `${user.name} se ha inscripto al curso ${courseDetail.title}`,
            icon: "success",
            timer: 1800,
          }).then(() => {
            setIsUpdating(false);
            window.location.reload();
          });
        })
        .catch(() => {
          setIsUpdating(false);
          Swal.fire({
            title: "Error en la inscripción",
            text: "Hubo un error al inscribir al usuario al curso",
            icon: "error",
          });
        });
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles["course-detail-info-container"]}>
        <div className={styles["course-detail-info"]}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleClickOpen}
            disabled={isUpdating}
          >
            {user.isLoggedIn
              ? !isUserEnrolled && "Inscribete ahora a este curso"
              : "Inicia sesion para inscribirte a este curso"}
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            {/* <Modal /> */}
            MODAL LOGIN
          </Dialog>
        </div>

        <div className={styles["course-detail-info"]}>
          <div className={styles["course-detail-h1-container"]}>
            <h1>Introduccion</h1>
          </div>
          <h4>
            ¡Bienvenidos y bienvenidas a nuestro Taller de {courseDetail.title}!
          </h4>
          <span>{courseDetail.description}</span>
        </div>

        <div className={styles["course-detail-info-instructor"]}>
          <div className={styles["course-detail-h1-container"]}>
            <h1>Tallerista</h1>
          </div>

          <div className={styles["course-detail-info-instructor-container"]}>
            <div className={styles["course-detail-info-instructor-img"]}>
              <Image
                src={instructor.profilePicture}
                alt='instructor course detail'
                className={styles["instructor-picture"]}
                width={80}
                height={80}
              />
              <h2>{instructor.name}</h2>
            </div>
            <div className={styles["instructor-description"]}>
              <h4>
                Mensaje que te gustaria dejar a la comunidad emprendedora de
                Portamor:
              </h4>
              <span>{instructor.description}</span>
            </div>
          </div>
        </div>

        <div className={styles["sections-container"]}>
          <div className={styles["course-detail-h1-container"]}>
            <h1>Modulos</h1>
          </div>

          <div className={styles["course-detail-sections"]}>
            <span>A continuación, te presentamos los módulos del curso</span>
            <div className={styles["modules-container"]}>
              {courseSections &&
                courseSections.map((section, index) => {
                  return (
                    <div key={section.id}>
                      <p>Modulo {index + 1}:</p>
                      <p>{section.name}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className={styles["materials-container"]}>
          <div className={styles["course-detail-h1-container"]}>
            <h1>Materiales</h1>
          </div>

          <div className={styles["course-detail-materials"]}>
            <span>Materiales que necesitarás:</span>
            <ol>
              {courseDetail.materials &&
                courseDetail.materials.map((material, index) => (
                  <li key={index}>
                    <span>{material}</span>
                  </li>
                ))}
            </ol>
          </div>
        </div>

        <div className={styles["certificate-portamor"]}>
          <div className={styles["course-detail-h1-container"]}>
            <h1>Certificado digital</h1>
          </div>
          <div className={styles["certificate-portamor-container"]}>
            <Image
              src={certificate}
              alt='certificate detail'
              width={300}
              className={styles["certificate-img"]}
            />
            <p>
              “Al final del curso podrás descargar un certificado virtual que
              acredite que has lo has finalizado con éxito”
            </p>
          </div>
        </div>
        <div className={styles["description-portamor-main"]}>
          <div className={styles["description-portamor"]}>
            <h2>PORTAMOR</h2>
            <p>
              Somos una Comunidad que empodera al adulto mayor por un
              envejecimiento activo y saludable a través de nuestra plataforma
              interactiva de aprendizaje integral.
            </p>

            <h2>METODOLOGIA</h2>
            <p>
              Los cursos serán desarrollados sobre la base de una metodología
              interactiva que promueve el autoaprendizaje y el trabajo
              colaborativo, complementada con presentaciones del especialista de
              cada sesión.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["course-space"]}></div>
      <div className={styles["course-card-container"]}>
        <CourseDetailCard
          image={courseDetail.image}
          courseId={courseId}
        />
      </div>
    </>
  );
};
