import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import UserList from "../components/UserList";
import LoadingSpinner from "../components/LoadingSpinner";
import { searchUsers } from "../api";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // <-- new state

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setHasSearched(true); // <-- mark that a search was performed

    try {
      const data = await searchUsers(query);
      setUsers(data.items || []);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }

    setLoading(false);
  };

  return (
    <div className="home-container">
      <h1>GitHub Explorer</h1>
      <p>
        Search for GitHub users and explore their profiles, repositories, and
        recent commits.
      </p>

      <div className="search-container">
        <SearchBox onSearch={handleSearch} />
      </div>

      {loading && <LoadingSpinner />}
      {!loading && hasSearched && users.length === 0 && <p>No users found.</p>}
      {!loading && users.length > 0 && <UserList users={users} />}
    </div>
  );
};

export default Home;
