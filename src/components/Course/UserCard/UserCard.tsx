import styles  from "./UserCard.module.css";
import usersImg  from "../../images/users-icon.svg";
import { PersonFill } from "react-bootstrap-icons";

interface UserCardProps {
  name: string;
  lastName: string;
  description?: string;
}

export const UserCard = ({ name, lastName, description }: UserCardProps) => {
  return (
    <div className={styles["user-card"]}>
      <div className={styles["picture"]}><PersonFill size={30} /></div>
      <div className={styles["info-user-container"]}>
        <h2>{name} {lastName}</h2>
        <p className={styles["user-description"]}>
          {description} 
        </p>
        {/*
        // TO REVIEW: No contiene ninguna funcionalidad
        {instructor && <CustomButton onClick={props.onClick} content={"SELECCIONAR"} primary={true}/>} */}
      </div>

    </div>
  );
};
