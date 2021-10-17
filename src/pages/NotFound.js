import React from "react";
import { Link } from "react-router-dom";
import "./styles/404.css";
import astronauta from "../images/404error.svg";
import logo from "../images/logo.svg";

function NotFound() {
  return (
    <div className="Background">
      <img className="Image" src={astronauta} alt="Error 404"></img>
    </div>
  );
}

export default NotFound;
