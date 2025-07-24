/**
 * Service layer for GitHub API calls using Axios.
 */

const axios = require("axios");

const BASE_URL = "https://api.github.com";

const githubAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/vnd.github+json",
    // Optional: add GitHub token for higher rate limits
    // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

/**
 * Search users by query string.
 * @param {string} query
 * @returns {Promise<Object>} Search results
 */
async function searchUsers(query) {
  const response = await githubAxios.get("/search/users", {
    params: { q: query },
  });
  return response.data;
}

/**
 * Get GitHub user data.
 * @param {string} username
 * @returns {Promise<Object>} User details
 */
async function getUserData(username) {
  const response = await githubAxios.get(`/users/${username}`);
  return response.data;
}

/**
 * Get all repos for a user.
 * @param {string} username
 * @returns {Promise<Array>} List of repos
 */
async function getRepos(username) {
  const response = await githubAxios.get(`/users/${username}/repos`, {
    params: { sort: "updated", per_page: 100 },
  });
  return response.data;
}

/**
 * Get repo details.
 * @param {string} username
 * @param {string} repo
 * @returns {Promise<Object>} Repo details
 */
async function getRepoDetails(username, repo) {
  const response = await githubAxios.get(`/repos/${username}/${repo}`);
  return response.data;
}

/**
 * Get last N commits for a repo.
 * @param {string} username
 * @param {string} repo
 * @param {number} count
 * @returns {Promise<Array>} List of commits
 */
async function getCommits(username, repo, count = 5) {
  const response = await githubAxios.get(`/repos/${username}/${repo}/commits`, {
    params: { per_page: count },
  });
  return response.data;
}

module.exports = {
  searchUsers,
  getUserData,
  getRepos,
  getRepoDetails,
  getCommits,
};
