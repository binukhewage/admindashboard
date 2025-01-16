import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/dashboard/news')
      .then(response => setNews(response.data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">News</h1>
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Published Date</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {news.length > 0 ? (
            news.map(item => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                <td className="border border-gray-300 px-4 py-2">{item.publishedDate}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-blue-500 text-white px-4 py-2">Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">No news found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default News;
