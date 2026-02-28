import React from "react";

const UserTable = ({ users, onView }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
            <td>
              <button onClick={() => onView(user)}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;