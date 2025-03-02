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

 
};

export default Job;
