import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/poke-details.css";
import pokebola from "../img/pokebola-image.png";
import pokedex from "../img/pokedex.png";
import { useNavigate } from "react-router-dom";
const CharactersDetails = () => {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data));
  }, []);

 
  //console.log(pokemon);
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/characters");
  };

  return (
    <div className="pokemon-content">
        <div className="pokebola-top-characters">
        <div className="poke-middle-characters">
          <div className="poke-middle-white-characters"></div>
        </div>
        <img src={pokedex} alt="pokedex" />
      </div>
      <button onClick={backPage} className="row-back"><i class="fa-solid fa-arrow-left"></i></button>
      <div className="pokemon-details">
        <div className="spells-poke">
          <div
            className={`${pokemon.types?.[0].type.name} top-background`}
          ></div>
          <div className="details-container">
            <img src={pokemon.sprites?.other.home.front_default} alt="" />
            <div className="text-id-name">
              <h3>#{pokemon.id}</h3>
              <div className="line-name">
                <div className="line-left"> </div>
                <h2>{pokemon.name?.toUpperCase()}</h2>
                <div className="line-right"></div>
              </div>
            </div>
            <div className="weight-height">
              <div className="weight">
                <p>Weight</p>
                <p>{pokemon.weight}</p>
              </div>
              <div className="height">
                <p>Height</p>
                <p>{pokemon.height}</p>
              </div>
            </div>
            <div>
              <div className="types-skills">
                <div className="types-box">
                  <p>Type</p>
                  <div className="types-container">
                    {pokemon.types?.map((type) => (
                      <div
                        key={type.type.url}
                        className={`${type.type.name} type-text`}
                      >
                        {type.type.name.toUpperCase()}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skills-box">
                  <p>Skills</p>
                  <div className="skills-container">
                    {pokemon.abilities?.map((ability) => (
                      <div key={ability.ability.url} className="border-ability">
                        {ability.ability.name.toUpperCase()}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="stats-box">
                <div className="stats-title">
                  <h2>Stats</h2>
                  <div className="line-stats"></div>
                  <img src={pokebola} alt="pokebola" />
                </div>
                <div className="bar-stats">
                  <div className="config">
                    <p>HP</p>
                    <p>{pokemon.stats?.[0].base_stat} / 150</p>
                  </div>
                  <progress
                    max="150"
                    value={pokemon.stats?.[0].base_stat}
                  ></progress>
                </div>
                <div className="bar-stats">
                  <div className="config">
                    <p>Attack</p>
                    <p>{pokemon.stats?.[1].base_stat} / 150</p>
                  </div>
                  <progress
                    max="150"
                    value={pokemon.stats?.[1].base_stat}
                  ></progress>
                </div>
                <div className="bar-stats">
                  <div className="config">
                    <p>Defense</p>
                    <p>{pokemon.stats?.[2].base_stat} / 150</p>
                  </div>
                  <progress
                    max="150"
                    value={pokemon.stats?.[2].base_stat}
                  ></progress>
                </div>
                <div className="bar-stats">
                  <div className="config">
                    <p>Speed</p>
                    <p>{pokemon.stats?.[5].base_stat} / 150</p>
                  </div>
                  <progress
                    max="150"
                    value={pokemon.stats?.[5].base_stat}
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-movements">
        <div className="backgraund-movements">
          <div className="movements-title">
            <h2>Movements</h2>
            <div className="line-movements"></div>
            <img src={pokebola} alt="pokebola" />
          </div>
          <div className="movements">
            {pokemon?.moves?.map((move, i) => (
              <div key={move.url} className="move-poke">
                <h4>{move.move.name}</h4>
              </div>
            ))}
          </div>
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

export default CharactersDetails;
