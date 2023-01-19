import { FC, useState } from "react";
import { GitHubError, GitHubUser, LocalGitHubUser } from "types";
import { Container } from "components/Container";
import { TheHeader } from "components/TheHeader";
import { Search } from "components/Search";

import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { isGitHubUser } from "utils/typeguards";
import { extractLocalUser } from "utils/extract-local-user";

const BASE_URL = "https://api.github.com/users/";

export const App: FC = ({}) => {
  const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);

  const fetchUser = async (userName: string) => {
    const url = BASE_URL + userName;
    const response = await fetch(url);
    const user = (await response.json()) as GitHubUser | GitHubError;

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
};
