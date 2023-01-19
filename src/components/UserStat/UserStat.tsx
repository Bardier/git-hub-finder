import { FC } from "react";
import { LocalGitHubUser } from "types";
import styles from "./UserStat.module.scss";

interface UserStatProps
  extends Pick<LocalGitHubUser, "followers" | "following" | "repos"> {}

export const UserStat: FC<UserStatProps> = ({
  following,
  followers,
  repos,
}) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoNumber}>{repos}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>
    </div>
  );
};
