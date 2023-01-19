import { FC } from "react";
import { LocalGitHubUser } from "types";
import styles from "./UserTitle.module.scss";

interface UserTitleProps
  extends Pick<LocalGitHubUser, "name" | "login" | "created"> {}

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const UserTitle: FC<UserTitleProps> = ({ name, login, created }) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};
