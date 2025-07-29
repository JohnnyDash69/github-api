import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { getUser, getUserRepos } from "../api";

export default function UserDetails() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const userData = await getUser(username);
        const userRepos = await getUserRepos(username);
        setUser(userData);
        setRepos(userRepos);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={`${user.login} avatar`} width={100} />
      <p>{user.bio || "No bio available."}</p>
      <p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          View on GitHub
        </a>
      </p>

      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/user/${username}/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to="/">← Back to Search</Link>
      </p>
    </div>
  );
}
