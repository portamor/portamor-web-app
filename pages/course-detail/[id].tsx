"use client";
import React, { useEffect, useState } from "react";
import { ReduxProvider } from "@src/redux/provider";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarIcon from "@mui/icons-material/Star";

import styles from "@src/components/CourseDetail/CourseDetail.module.css";
// import SelectedContent from "@src/components/CourseDetail/SelectedContent/SelectedContent";
import { Link } from "react-router-dom";
import { useGetCourseDetailQuery } from "@src/services/courses.service";
import { useAppSelector } from "@src/redux/hooks";

export default function CourseDetail({ courseId }) {
  const { data } = useGetCourseDetailQuery({ courseId })
  const user = useAppSelector((state) => state.user);
  // const courses = useAppSelector((state) => state.courses.data);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentSectionId, setCurrentSectionId] = useState("1");
  const sections = [
    { id: "1", name: "Vision General" },
    { id: "2", name: "Preguntas Frecuentes" },
    { id: "3", name: "Comentarios" },
  ];

  if (!data) {
    return <>LOADING</>;
  }

  /* const userIsEnrolled =
    user.id &&
    data.courses?.courses.some(
      (course) => course.id === courseId && course.userId === user.id
    ); */

  return (
    <div className={styles["course-detail-main"]}>
      <div className={styles["course-detail-head"]}>
        <div className={styles["course-detail-head-container"]}>
          <div className={styles["head-instructor-container"]}>
            <div className={styles["instructor-name-container"]}>
              <Image
                src={data.instructor.profilePicture}
                alt='instructor course detail'
                width={80}
                height={80}
                className={styles["instructor-head-picture"]}
              />
              <div>
                <p>Instructor</p>
                <h2 className={styles["head-instructor-name"]}>
                  {data.instructor.name}
                </h2>
              </div>
            </div>
            <span className={styles["stars-container"]}>
              {new Array(data.instructor.score).fill(true).map((_, i) => (
                <StarIcon key={i} color='primary' />
              ))}
            </span>
          </div>

          <div className={styles["course-detail-h1-container"]}>
            <h1 className={styles["course-title"]}>{data.courseDetail.title}</h1>
          </div>
          <Box display="flex" alignItems="center" my={2}>
            <PeopleAltIcon />
            <Typography variant="body1" ml={2}>{data.users.length} Estudiantes</Typography>
          </Box>
        </div>
      </div>

      <div className={styles["buttons-select-container"]}>
        <div className={styles["buttons-container"]}>
          {sections.map((section, i) => (
            <button
              key={i}
              className={
                section.id === currentSectionId
                  ? styles["selected-button"]
                  : styles["button-not-selected"]
              }
              onClick={() => setCurrentSectionId(section.id)}
            >
              {section.name}
            </button>
          ))}
          {/* {userIsEnrolled && (
            <Link updateEnrolledStatus={setIsEnrolled} className={styles["link-classes-button"]} to={`/clase/${courseId}/${firstVideoId}`}>Ir a las clases</Link>
          )} */}
        </div>
      </div>

      <div className={styles["course-detail-container"]}>
        {/* selectedButton &&
          <SelectedContent
            courseId={courseId}
            courseDetail={courseDetail}
            selectedButtonContent={currentSectionId} /> */}
      </div>
    </div>
  );
}

CourseDetail.getLayout = function getLayout(page) {
  return <ReduxProvider>{page}</ReduxProvider>;
};

CourseDetail.getInitialProps = (appContext) => {
  return { courseId: appContext.query.id };
};
