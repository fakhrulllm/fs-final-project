import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Employer = () => {
  const [employers, setEmployers] = useState([]);

  const getEmployers = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://localhost:5000/employers",
      });
      // console.log(result.data);
      setEmployers(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("useEffect jalan");
    getEmployers();
  }, []);

  return (
    <div className="max-w-5xl mx-auto bg-white p-5 shadow-lg rounded-lg">
      <div className="flex justify-between mb-4">
        <button className="bg-black "> </button>
      </div>
      <table className="w-full border-collapse bg-white text-left shadow-md rounded-lg">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Type</th>
            <th className="p-3">Total Employee</th>
            <th className="p-3">City</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employers.map((employer) => (
            <tr key={employer.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{employer.id}</td>
              <td className="p-3">{employer.name}</td>
              <td className="p-3">{employer.type}</td>
              <td className="p-3">{employer.total_employee}</td>
              <td className="p-3">{employer.city}</td>
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

export default Employer;
