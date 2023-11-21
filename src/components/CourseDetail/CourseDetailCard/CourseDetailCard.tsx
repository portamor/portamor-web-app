/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Styles from "./CourseDetailCard.module.css";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { useGetReviewsByCourseIdQuery } from "@src/services/review.service";

interface CourseDetailCardProps {
  courseId: string;
  image: string;
}

export const CourseDetailCard = ({
  courseId,
  image,
}: CourseDetailCardProps) => {
  const {
    data: courseReviews,
    isLoading,
    isError,
  } = useGetReviewsByCourseIdQuery({ courseId });

  if (isLoading || isError) {
    return <div>LOADING</div>;
  }

  return (
    <div className={Styles["course-card"]}>
      <Image src={image} alt='course card' width={80} height={80} />
      <div className={Styles["review-container"]}>
        <strong>Reseña destacada</strong>
        {courseReviews.length && (
          <div>
            {new Array(Math.max(...courseReviews.map((x) => x.starsValue)))
              .fill(true)
              .map((_, i) => (
                <StarIcon key={i} color='primary' />
              ))}
          </div>
        )}
      </div>
      <Link
        className={Styles["card-button"]}
        href={{
          pathname: "https://api.whatsapp.com/send?phone=51943203772",
        }}
      >
        Mas información
      </Link>
      <span>
        "Los cursos serán desarrollados sobre la base de una metodología
        interactiva que promueve el autoaprendizaje y el trabajo colaborativo,
        complementada con presentaciones del especialista de cada sesión."
      </span>
    </div>
  );
};
