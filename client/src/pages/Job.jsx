import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Job = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://localhost:5000/jobs",
      });
      // console.log(result.data);
      setJobs(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("useEffect jalan");
    getJobs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto bg-white p-5 shadow-lg rounded-lg">
      <div className="flex justify-between mb-4">
      </div>
      <table className="w-full border-collapse bg-white text-left shadow-md rounded-lg">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">Max Salary</th>
            <th className="p-3">Min Salary</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{job.id}</td>
              <td className="p-3">{job.name}</td>
              <td className="p-3">{job.category}</td>
              <td className="p-3">{job.max_salary}</td>
              <td className="p-3">{job.min_salary}</td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Job;
