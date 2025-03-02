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
     
};

export default Employer;
