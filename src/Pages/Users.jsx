import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/dashboard/users');
        console.log('Fetched Users:', response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;