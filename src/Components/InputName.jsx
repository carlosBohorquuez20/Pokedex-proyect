import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/input.css";
import { useDispatch } from "react-redux";
import { changeName } from "../store/slices/name.slice";
import Typewriter from "typewriter-effect";
import docOak1 from "../img/doc.png";
import pokedex from "../img/pokedex.png";

const InputName = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const enterName = () => {
    dispatch(changeName(userName));
    navigate("/characters");
  };
  return (
    <div className="home-page">
      <div className="home-container">
        <img src={pokedex} alt="pokedex" className="pokedex-title" />
        <div className="home-intro">
          <h2>Hello trainer!</h2>
          <img src={docOak1} alt="doc oak" className="doc-oak" />
        </div>
        <Typewriter
          className="tex-intro"
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: "To get started, enter your name",
          }}
        />

        <div className="input-button">
          <input
            placeholder="Insert Name..."
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="button" onClick={enterName}>
            I'M READY
          </button>
        </div>
      </div>
      <div className="pokebola-top">
        <div className="poke-middle">
          <div className="poke-middle-white"></div>
        </div>
      </div>
    </div>
  );
};

export default InputName;
