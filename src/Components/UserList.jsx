import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./userCard";
import EditForm from "./EditForm";
import "./UserList.css";


const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { id, first_name, last_name, email } = editingUser;
      await axios.put(`https://reqres.in/api/users/${id}`, {
        first_name,
        last_name,
        email,
      });

      alert("User updated successfully!");
      setEditingUser(null);
      fetchUsers();

    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className="user-list-container">
      <h1>User List</h1>

      <div className="user-cards">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {editingUser && (
        <EditForm
          editingUser={editingUser}
          setEditingUser={setEditingUser}
          handleFormSubmit={handleFormSubmit}
        />
      )}

      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserListPage;
