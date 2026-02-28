import React, { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import UserModal from "../components/UserModal";
import Loader from "../components/Loader";

const Dashboard = () => {


  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortOrder, setSortOrder] = useState("");

  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {

        setLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    let tempUsers = [...users];

    // Search
    tempUsers = tempUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting
    if (sortOrder === "name-asc") {
      tempUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "name-desc") {
      tempUsers.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === "company") {
      tempUsers.sort((a, b) =>
        a.company.name.localeCompare(b.company.name)
      );
    }

    setFilteredUsers(tempUsers);
    setCurrentPage(1);
  }, [searchTerm, sortOrder, users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  if (loading) return <Loader />;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="dashboard">
      <h1>User Management Dashboard</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSortOrder={setSortOrder}
      />

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <>
          <UserTable users={currentUsers} onView={setSelectedUser} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

      {selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;