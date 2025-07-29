import axios from "axios";

const getUserData = async (username) => {
  try {
    const response = await axios.get(`/api/github/user/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const getRepos = async (username) => {
  try {
    const response = await axios.get(`/api/github/repos/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
};

const getRepoDetails = async (username, repo) => {
  try {
    const response = await axios.get(`/api/github/repo/${username}/${repo}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repository details:", error);
  }
};

export { getUserData, getRepos, getRepoDetails };
