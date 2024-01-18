"use client";
import React, { useState } from "react";
import { ReduxProvider } from "@src/redux/provider";
import Image from "next/image";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarIcon from "@mui/icons-material/Star";

import styles from "@src/components/CourseDetail/CourseDetail.module.css";
import { useGetCourseDetailQuery } from "@src/services/courses.service";
import { useAppSelector } from "@src/redux/hooks";
import { TabPanel } from "@src/components/CourseDetail/TabPanel/TabPanel";
import { GeneralVision } from "@src/components/CourseDetail/GeneralVision/GeneralVision";
import { FYQ } from "@src/components/CourseDetail/FYQ/FYQ";
import { CourseDetailCard } from "@src/components/CourseDetail/CourseDetailCard/CourseDetailCard";
import { ReviewCard } from "@src/components/CourseDetail/ReviewCard/ReviewCard";
import Link from "next/link";

export default function CourseDetail({ courseId }) {
  const { data, isLoading } = useGetCourseDetailQuery({ courseId });
  const [currentSectionId, setCurrentSectionId] = useState(0);
  const user = useAppSelector((state) => state.user);
  const isUserEnrolled = data?.users.some((x) => x.id === user.id);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentSectionId(newValue);
  };

  if (!data && isLoading) {
    return <>LOADING</>;
  }

  const isEqualToCourseId =
    data.reviews[0] &&
    data.reviews[0].courseId &&
    data.reviews[0].courseId === courseId;

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
            <h1 className={styles["course-title"]}>
              {data.courseDetail.title}
            </h1>
          </div>
          <Box display='flex' alignItems='center' my={2}>
            <PeopleAltIcon />
            <Typography variant='body1' ml={2}>
              {data.users.length} Estudiantes
            </Typography>
          </Box>
        </div>
      </div>
      <Container maxWidth='lg'>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={currentSectionId}
            onChange={handleChangeTab}
            aria-label='basic tabs example'
          >
            <Tab label='Vision General' aria-controls='simple-tabpanel-1' />
            <Tab
              label='Preguntas Frecuentes'
              aria-controls='simple-tabpanel-2'
            />
            <Tab label='Comentarios' aria-controls='simple-tabpanel-3' />
            {isUserEnrolled && (
              <Tab
                label='Ir a clases'
                value='/trash'
                href={{ pathname: `/course/${courseId}/${data.sections[0].videos[0].id}` }}
                component={Link}
              />
            )}
          </Tabs>
        </Box>
        <TabPanel value={currentSectionId} index={0}>
          <GeneralVision
            courseId={courseId}
            courseDetail={data.courseDetail}
            courseSections={data.sections}
            instructor={data.instructor}
            isUserEnrolled={isUserEnrolled}
          />
        </TabPanel>
        <TabPanel value={currentSectionId} index={1}>
          <div className={styles["fyq-main-container"]}>
            <div className={styles["fyq"]}>
              <div className={styles["fyq-container"]}>
                <FYQ />
              </div>
              <div className={styles["course-space"]}></div>
              <div className={styles["course-card-container"]}>
                <CourseDetailCard
                  key={data.courseDetail.id}
                  image={data.courseDetail.image}
                  courseId={courseId}
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={currentSectionId} index={2}>
          <div className={styles["reviews-main-container"]}>
            <div className={styles["reviews-and-card-container"]}>
              <div className={styles["reviews-container"]}>
                {isEqualToCourseId && data.reviews[0] ? (
                  data.reviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      id={review.id}
                      title={review.title}
                      comment={review.comment}
                      stars_value={review.starsValue}
                    />
                  ))
                ) : (
                  <p>No se han hecho comentarios de este curso todavia.</p>
                )}
              </div>

              <div className={styles["course-space"]}></div>
              <div className={styles["course-card-container"]}>
                <CourseDetailCard
                  key={data.courseDetail.id}
                  image={data.courseDetail.image}
                  courseId={courseId}
                />
              </div>
            </div>
          </div>
        </TabPanel>
      </Container>
    </div>
  );
}

CourseDetail.getLayout = function getLayout(page) {
  return <ReduxProvider>{page}</ReduxProvider>;
};

CourseDetail.getInitialProps = (appContext) => {
  return { courseId: appContext.query.id };
};
