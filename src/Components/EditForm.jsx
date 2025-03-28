import React from "react";
import "./EditForm.css";


const EditForm = ({ editingUser, setEditingUser, handleFormSubmit }) => {
  return (
    <div className="edit-form">
      <h2>Edit User</h2>
      <form onSubmit={handleFormSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          value={editingUser.first_name}
          onChange={(e) => setEditingUser({ ...editingUser, first_name: e.target.value })}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          value={editingUser.last_name}
          onChange={(e) => setEditingUser({ ...editingUser, last_name: e.target.value })}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={editingUser.email}
          onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
          required
        />

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
