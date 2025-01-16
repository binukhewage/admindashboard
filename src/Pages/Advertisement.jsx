import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Advertisements = () => {
  const [ads, setAds] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [], 
    datasets: [
      {
        label: 'Advertisement Views', 
        data: [], 
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  });

  useEffect(() => {
    axios.get('/dashboard/advertisements')
      .then(response => {
        const fetchedAds = response.data;
        setAds(fetchedAds);

        
        const labels = fetchedAds.map(ad => ad.title); 
        const data = fetchedAds.map(ad => ad.views); 
        
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Advertisement Views',
              data: data,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
              fill: true,
            },
          ],
        });
      })
      .catch(error => console.error('Error fetching advertisements:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Advertisements</h1>
      
      
      <div className="mb-8">
        <Line data={chartData} />
      </div>

      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {ads.length > 0 ? (
            ads.map(ad => (
              <tr key={ad.id}>
                <td className="border border-gray-300 px-4 py-2">{ad.id}</td>
                <td className="border border-gray-300 px-4 py-2">{ad.title}</td>
                <td className="border border-gray-300 px-4 py-2">{ad.status}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-blue-500 text-white px-4 py-2">Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">No advertisements found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Advertisements;
