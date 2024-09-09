import React, { useEffect, useState } from 'react';
import Chart from './chart';
import DataTable from './dataTable';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const Dashboard = () => {
  const [data, setData] = useState({ labels: [], values: [] });
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    socket.on('data', (newData) => {
      setData((prevData) => ({
        labels: [...prevData.labels, new Date().toLocaleTimeString()],
        values: [...prevData.values, newData.value],
      }));
      setTableData((prevData) => [
        ...prevData,
        { time: new Date().toLocaleTimeString(), value: newData.value },
      ]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <Chart data={data} />
      <DataTable data={tableData} />
    </div>
  );
};

export default Dashboard;
