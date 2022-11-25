import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pokebola.css";
import "../styles/poke-card.css";
const CharacterCard = ({ url }) => {
  const [character, setCharacter] = useState({});


  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);
  //console.log(character);



  return (
    <li className={character?.types?.[0]?.type?.name}>
      <div className="card-container">
        <Link to={`/characters/${character.id}`}>
          <img
            src={`${character.sprites?.other.home.front_default}`}
            alt="poke-image"
            className="poke-image"
          />
          <div className="details-poke">
            <h2>{character.name?.toUpperCase()}</h2>
            <p className="info-type">
              {character?.types?.[0]?.type?.name?.toUpperCase()}{" "}
              {character?.types?.length > 1 ? "/" : ""}{" "}
              {character?.types?.[1]?.type?.name?.toUpperCase()}
            </p>
            <p className="text-type">Type</p>
          </div>
          <div className="stats-container">
            <div>
              <div className="center-info">
                <p>HP</p>
                <p>{character?.stats?.[0].base_stat}</p>
              </div>
              <div className="center-info">
                <p>Defensa</p>
                <p>{character?.stats?.[1].base_stat}</p>
              </div>
            </div>
            <div>
              <div className="center-info">
                <p>Ataque</p>
                <p>{character?.stats?.[2].base_stat}</p>
              </div>
              <div className="center-info">
                <p>Velocidad</p>
                <p>{character.stats?.[5].base_stat}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default CharacterCard;
