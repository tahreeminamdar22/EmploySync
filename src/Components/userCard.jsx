import React from "react";
const UserCard = ({user, onDelete, onEdit}) => {
    return(
        <div className="card">
            <img src={user.avatar} alt="user-image" />
            <h2>{user.first_name} { user.last_name}</h2>
            <p>{user.email}</p>

            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
            </div>
    );
}
export default UserCard;
