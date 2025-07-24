/**
 * Controller functions to handle GitHub API requests.
 */

const githubApi = require("../services/githubApi");

exports.searchUsers = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Missing query parameter "q"' });
    }
    const results = await githubApi.searchUsers(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const userData = await githubApi.getUserData(username);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserRepos = async (req, res) => {
  try {
    const { username } = req.params;
    const repos = await githubApi.getRepos(username);
    res.json(repos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRepoDetails = async (req, res) => {
  try {
    const { username, repo } = req.params;
    const repoDetails = await githubApi.getRepoDetails(username, repo);
    res.json(repoDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLastCommits = async (req, res) => {
  try {
    const { username, repo } = req.params;
    const commits = await githubApi.getCommits(username, repo, 5);
    res.json(commits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
