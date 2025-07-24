/**
 * Routes related to GitHub API integration.
 */

const express = require("express");
const router = express.Router();
const githubController = require("../controllers/githubController");

// Search users by query param ?q=
router.get("/search/users", githubController.searchUsers);

// Get user details by username
router.get("/user/:username", githubController.getUser);

// Get repos for a user
router.get("/user/:username/repos", githubController.getUserRepos);

// Get details for a specific repo
router.get("/user/:username/repos/:repo", githubController.getRepoDetails);

// Get last 5 commits for a specific repo
router.get(
  "/user/:username/repos/:repo/commits",
  githubController.getLastCommits
);

module.exports = router;
