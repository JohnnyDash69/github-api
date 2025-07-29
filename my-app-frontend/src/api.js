const BASE_URL = "http://localhost:5080/api/github";

export async function searchUsers(query) {
  const res = await fetch(
    `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function getUser(username) {
  const res = await fetch(`${BASE_URL}/user/${username}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

export async function getUserRepos(username) {
  const res = await fetch(`${BASE_URL}/user/${username}/repos`);
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
}

export async function getRepoDetails(username, repo) {
  const res = await fetch(`${BASE_URL}/user/${username}/repos/${repo}`);
  if (!res.ok) throw new Error("Failed to fetch repo details");
  return res.json();
}

export async function getRepoCommits(username, repo) {
  const res = await fetch(`${BASE_URL}/user/${username}/repos/${repo}/commits`);
  if (!res.ok) throw new Error("Failed to fetch commits");
  return res.json();
}
