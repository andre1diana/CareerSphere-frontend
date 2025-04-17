import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Alice Popescu', email: 'alice@example.com', active: true },
  { id: 2, name: 'George Ionescu', email: 'george@example.com', active: true },
  { id: 3, name: 'Maria Stan', email: 'maria@example.com', active: false },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);

  const toggleActive = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="user-management">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.active ? 'Active' : 'Inactive'}</td>
              <td>
                <button
                  className={`btn btn-sm ${user.active ? 'btn-warning' : 'btn-success'} mr-2`}
                  onClick={() => toggleActive(user.id)}
                  style={{ width: '100px' }}
                >
                  {user.active ? 'Deactivate' : 'Activate'}
                </button>
                <button 
                  className="btn btn-sm btn-danger" 
                  style={{ width: '100px' }}
                  onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
