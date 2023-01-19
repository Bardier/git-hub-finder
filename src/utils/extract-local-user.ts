import { LocalGitHubUser, GitHubUser } from "types";

export const extractLocalUser = (user: GitHubUser): LocalGitHubUser => ({
  login: user.login,
  company: user.company,
  bio: user.bio,
  twitter: user.twitter_username,
  blog: user.blog,
  avatar: user.avatar_url,
  created: user.created_at,
  name: user.name,
  repos: user.public_repos,
  id: user.id,
  location: user.location,
  followers: user.followers,
  following: user.following,
});
