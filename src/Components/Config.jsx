import React from "react";
import "../styles/config.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { items } from "../store/slices/items.slice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { createContext } from "react";
import ReactSwitch from "react-switch";
const Config = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const backPage = () => {
    navigate("/characters");
  };
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div className="page-config">
      <button onClick={backPage} className="row-back"><i class="fa-solid fa-arrow-left"></i></button>
      <h2>Settings</h2>
      <div className="items-page">
        <p>Items per page</p>
          <div className="buttons-config">
            <button onClick={() =>  dispatch(items(4))}>4</button>
            <button onClick={() =>  dispatch(items(6))}>6</button>
            <button onClick={() =>  dispatch(items(8))}>8</button>
            <button onClick={() =>  dispatch(items(12))}>12</button>
            <button onClick={() =>  dispatch(items(16))}>16</button>
            <button onClick={() =>  dispatch(items(20))}>20</button>
          </div>
      </div>
    </div>
  );
};

export default Config;
