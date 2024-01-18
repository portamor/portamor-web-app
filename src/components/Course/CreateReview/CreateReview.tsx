import React from "react";
import { REVIEW } from "../../Migration/constants";
import styles from "./CreateReview.module.css";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as utils from "../../Migration/utils";
import { Button } from "@mui/material";
import { ReviewType } from "@src/models";

interface CreateReviewProps {
  courseId: string;
}

export const CreateReview = ({ courseId }: CreateReviewProps) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  // TODO: Poner localStorage cuando se agregue el modulo del login
  // const user = JSON.parse(localStorage.getItem("user"));
  const user = { id: "123" }
  
  const [formValues, setFormValues] = useState({
    title: "",
    comment: "",
    stars_value: 0,
    userId: user.id,
    courseId: courseId,
  });

  const handleTitleChange = (title) => {
    setFormValues({
      ...formValues,
      title: title,
    });
  };

  const handleClickRatingStars = (index) => {
    setFormValues({
      ...formValues,
      stars_value: parseInt(index),
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = utils.validate(formValues, REVIEW);

    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors);
      return;
    }

    //dispatch(actions.createReview(formValues));

    setFormValues({
      title: "",
      comment: "",
      stars_value: 0,
      userId: user.id,
      courseId: courseId,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles["create-review-main"]}>
      <div className={styles["create-review-input-container"]}>
        <label htmlFor='title-review'>
          ¿Qué tal tu experiencia con el curso?
        </label>
        <div className={styles["buttons-container"]}>
          {Object.values(ReviewType).map((title, index) => (
            <Button
              key={index}
              type="button"
              variant={title === formValues.title ? "contained" : "outlined"}
              onClick={() => handleTitleChange(title)}
            >
              {title}
            </Button>
          ))}
        </div>
        {/* {errors.title && <p>{errors.title}</p>} */}
      </div>
      <div className={styles["create-review-input-container"]}>
        <label htmlFor='rating'>¿Cuántas estrellas le darías?</label>
        <div className={styles["stars-container"]}>
          {[1, 2, 3, 4, 5].map((value) => (
            <StarFill
              key={value}
              className='star'
              size={30}
              style={{ cursor: "pointer" }}
              color={value <= formValues.stars_value ? "red" : "#d9d9d9"}
              onClick={() => handleClickRatingStars(value)}
            />
          ))}
        </div>
        {/* {errors.stars_value && <p>{errors.stars_value}</p>} */}
      </div>
      <div className={styles["create-review-input-container"]}>
        <label htmlFor='comment'>Escribe tu comentario:</label>
        <textarea
          maxLength={250}
          id='comment'
          name='comment'
          rows={4}
          value={formValues.comment}
          onChange={handleChange}
          className={styles["review-textarea"]}
        ></textarea>
        {/* {errors.comment && <p>{errors.comment}</p>} */}
      </div>

      <div className={styles["create-review-input-container"]}>
        <div className={styles["buttons-container"]}>
          <Button
            type="submit"
            variant="contained"
            /* disabled={
              errors.title || errors.comment || errors.stars_value
                ? true
                : false
            } */
          >
            Crear comentario
          </Button>
        </div>
      </div>
    </form>
  );
};
