import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { getRepoDetails, getRepoCommits } from "../api";

export default function RepoDetails() {
  const { username, repo } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const repoData = await getRepoDetails(username, repo);
        const commitData = await getRepoCommits(username, repo);
        setRepoDetails(repoData);
        setCommits(commitData);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [username, repo]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!repoDetails) return <p>Repository not found.</p>;

  return (
    <div>
      <h2>{repoDetails.name}</h2>
      <p>{repoDetails.description || "No description available."}</p>
      <p>Created at: {new Date(repoDetails.created_at).toLocaleDateString()}</p>
      <p>
        Last updated: {new Date(repoDetails.updated_at).toLocaleDateString()}
      </p>
      <p>
        <a
          href={repoDetails.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          View on GitHub
        </a>
      </p>

      <h3>Last 5 Commits</h3>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>{commit.commit.message}</li>
        ))}
      </ul>

      <p>
        <Link to={`/user/${username}`}>← Back to User</Link>
      </p>
    </div>
  );
}
