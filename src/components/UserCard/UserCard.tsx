import { FC } from "react";
import { LocalGitHubUser } from "types";
import { UserStat } from "../UserStat";
import { UserTitle } from "../UserTitle";
import styles from "./UserCard.module.scss";
import { UserInfo } from "../UserInfo";

interface UserCardProps extends LocalGitHubUser {}

export const UserCard: FC<UserCardProps> = (props) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle
        login={props.login}
        name={props.name}
        created={props.created}
      />
      <p className={[styles.bio, `${props.bio ? "" : styles.empty}`].join(" ")}>
        {props.bio || "This profile has no bio"}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        company={props.company}
        blog={props.blog}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );
};
