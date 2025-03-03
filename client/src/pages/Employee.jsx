import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Employee = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://localhost:5000/employees",
      });
      // console.log(result.data);
      setEmployees(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("useEffect jalan");
    getEmployees();
  }, []);

  return (
    <div className="max-w-5xl mx-auto bg-white p-5 shadow-lg rounded-lg">
      <div className="flex justify-between mb-4">
      <Link className="btn-link" to="/employees/create">
        Create Employee
      </Link>
      <Link className="btn-link" to="/employees/detail/1">
        Detail Employer
      </Link>
      </div>
      <table className="w-full border-collapse bg-white text-left shadow-md rounded-lg">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Job</th>
            <th className="p-3">Age</th>
            <th className="p-3">City</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{employee.id}</td>
              <td className="p-3">{employee.name}</td>
              <td className="p-3">{employee.job}</td>
              <td className="p-3">{employee.age}</td>
              <td className="p-3">{employee.city}</td>
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

export default Employee;
