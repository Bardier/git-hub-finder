import { FC } from "react";
import { LocalGitHubUser } from "types";
import { InfoItem, InfoItemProps } from "components/InfoItem";
import styles from "./UserInfo.module.scss";

import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";

interface UserInfoProps
  extends Pick<LocalGitHubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo: FC<UserInfoProps> = ({
  company,
  twitter,
  location,
  blog,
}) => {
  const items: InfoItemProps[] = [
    {
      icon: <CompanyIcon />,
      text: company,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  );
};
