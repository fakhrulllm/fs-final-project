import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import { GiMiner } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto">
        <div className="flex flex-cols justify-center align-items-center">
          <Link className="btn-link" to="/">
          <AiTwotoneHome />
            Home
          </Link>
          <Link className="btn-link" to="/employees">
          <FaPeopleGroup />
            Employees
          </Link>
          <Link className="btn-link" to="/employer">
          <MdEmojiPeople />
            Employer
          </Link>
          <Link className="btn-link" to="/job">
          <GiMiner />
            Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
