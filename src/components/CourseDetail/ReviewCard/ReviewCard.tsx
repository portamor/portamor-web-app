import GroupIcon from '@mui/icons-material/Group';
import styles from "./ReviewCard.module.css";
import { StarFill } from "react-bootstrap-icons";

export const ReviewCard = (props) => {
  return (
    <div className={styles["review-card"]}>
      <GroupIcon />
      <div className={styles["info-review-container"]}>
        <div className={styles["head-info-review"]}>
          <h2>{props.title}</h2>
          <div>
            {Array.from(props.stars_value).fill(true).map((_, i) => <StarFill key={i} color="red" />)}
            <strong>{props.title}</strong>
          </div>
        </div>
        <p>{props.comment}</p>
      </div>
    </div>
  );
};
