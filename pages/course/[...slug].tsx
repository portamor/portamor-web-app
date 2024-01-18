"use client";
import React, { useState } from "react";
import { ReduxProvider } from "@src/redux/provider";
import Image from "next/image";
import Link from "next/link";

import styles from "@src/components/Course/ClassDetail.module.css";
import { useAppSelector } from "@src/redux/hooks";
import { useGetCourseQuery } from "@src/services/courses.service";
import ReactPlayer from "react-player";
import certifiedImg from "@public/images/certified-portamor.svg";
import { Button, Tab, Tabs } from "@mui/material";
import { TabPanel } from "@src/components/CourseDetail/TabPanel/TabPanel";
import { StarFill } from "react-bootstrap-icons";
import { ReviewCard } from "@src/components/CourseDetail/ReviewCard/ReviewCard";
import { CreateReview } from "@src/components/Course/CreateReview/CreateReview";
import { UserCard } from "@src/components/Course/UserCard/UserCard";
import { FYQ } from "@src/components/CourseDetail/FYQ/FYQ";
import { CourseAccordion } from "@src/components/Course/CourseAccordion/CourseAccordion";

interface CourseDetailProps {
  courseId: string;
  videoId: string;
}

export default function CourseDetail({ courseId, videoId }: CourseDetailProps) {
  const user = useAppSelector((state) => state.user);
  const [sectionRightId, setSectionRightId] = useState<number>(0);
  const [sectionBottomId, setSectionBottomId] = useState<number>(0);
  const { data, isLoading } = useGetCourseQuery({
    courseId,
    userId: user.id,
    videoId,
  });

  const handleEnd = async () => {
    /* dispatch(actions.createVideoState(payload))
    if (videosState.length >= videosCourse.length - 1) {
      setAllVideosWatched(true)
    } */
  };

  const handleSelectChange = (id: number) => {
    setSectionRightId(id);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setSectionBottomId(newValue);
  };

  if (!data && isLoading) {
    return <>LOADING</>;
  }

  return (
    <div className={styles["class-detail-main"]}>
      <div className={styles["video-description-container"]}>
        <div>
          <h1 className={styles["course-title"]}>
            Curso de{" "}
            <span className={styles["course-title-color"]}>
              {data.courseDetail.title}
            </span>
          </h1>
          <div className={styles["react-player"]}>
            <ReactPlayer
              url={data.videoById.videoLink}
              width='100%'
              height='100%'
              onEnded={handleEnd}
            />
          </div>
        </div>

        <div className={styles["description-container"]}>
          <h2 className={styles["description-title"]}>Descripción del curso</h2>
          <p className={styles["description-text"]}>
            {data.courseDetail.description}
          </p>
          <span className={styles["stars-container"]}>
            Valoración del curso:
            {new Array(data.courseDetail.rating).fill(true).map((_, i) => <StarFill key={i} color="red" />)}
          </span>
          <div className={styles["certified-container"]}>
            <span>Incluye certificado:</span>
            <strong>Si</strong>
            <Image src={certifiedImg} alt='certified' />
          </div>
          <div className={styles["buttons-container"]}>
            <Button
              variant={sectionRightId === 0 ? "contained" : "outlined"}
              onClick={() => handleSelectChange(0)}
            >
              Ver temario
            </Button>
            <Button
              variant={sectionRightId === 1 ? "contained" : "outlined"}
              onClick={() => handleSelectChange(1)}
            >
              Sobre el instructor
            </Button>
          </div>
        </div>
      </div>

      <div className={styles["secciones-temario-container"]}>
        <div className={styles["buttons-and-cards-container"]}>
          <Tabs
            value={sectionBottomId}
            onChange={handleChangeTab}
            aria-label='basic tabs example'
          >
            <Tab label="Comentarios" aria-controls="simple-tabpanel-1" />
            <Tab label="Materiales" aria-controls="simple-tabpanel-2" />
            <Tab label="Participantes" aria-controls="simple-tabpanel-3" />
            <Tab label="Preguntas Frecuentes" aria-controls="simple-tabpanel-4" />
            {/* {allVideosWatched && <Tab label="Descarga Certificado" aria-controls="simple-tabpanel-5" /> } */}
          </Tabs>

          <div className={styles["cards-container"]}>
            <TabPanel value={sectionBottomId} index={0}>
              <div>
                <CreateReview courseId={courseId} />
                <div className={styles["reviews-container"]} >
                  {
                    data.courseReviews.length ?
                      data.courseReviews.map((review) =>
                        <ReviewCard
                          key={review.id}
                          id={review.id}
                          title={review.title}
                          comment={review.comment}
                          stars_value={review.starsValue} />
                      )
                      :
                      <p>No se han hecho comentarios de este curso todavia.</p>
                  }
                </div>
              </div>
            </TabPanel>
            <TabPanel value={sectionBottomId} index={1}>
              <h2 className={styles["info-component-material-title"]}>
                Para este curso necesitaras los siguientes materiales: <br />
              </h2>
              {data.courseDetail.materials.map((material, index) =>
                <h2 className={styles["info-component-material-title"]} key={index}>
                  {material} <br />
                </h2>
              )}
            </TabPanel>
            <TabPanel value={sectionBottomId} index={2}>
              {data.courseUsers.length && data.courseUsers.map((user) =>
                <UserCard
                  key={user.id}
                  lastName={user.lastName}
                  name={user.name} />
              )}
            </TabPanel>
            <TabPanel value={sectionBottomId} index={3}>
              <div className={styles["fyq-container"]} >
                <FYQ />
              </div>
            </TabPanel>
            <TabPanel value={sectionBottomId} index={4}>
              {/* <DownloadCertificate title={courseDetail?.title} /> */}
            </TabPanel>
          </div>
        </div>

        {/* {
          firstSelectedButton &&
          <SelectedData
            courseId={courseId}
            courseDetail={courseDetail}
            selectedButtonContent={firstSelectedButton} />
        } */}
        {sectionRightId === 0 && <CourseAccordion sections={data.courseSections} courseId={courseId} />}
        {/* {sectionRightId === 1 && <InstructorDetail instructorId={data.courseDetail.instructorId} />} */}
      </div>
    </div>
  );
}

CourseDetail.getLayout = function getLayout(page) {
  return <ReduxProvider>{page}</ReduxProvider>;
};

CourseDetail.getInitialProps = (appContext) => {
  return {
    courseId: appContext.query.slug[0],
    videoId: appContext.query.slug[1],
  };
};
