import React from "react";
import { Link } from "react-router-dom";

export default function UserList({ users }) {
  if (!users || users.length === 0) return <p>No users found.</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
          <Link to={`/user/${user.login}`}>{user.login}</Link>{" "}
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            (GitHub)
          </a>
        </li>
      ))}
    </ul>
  );
}
