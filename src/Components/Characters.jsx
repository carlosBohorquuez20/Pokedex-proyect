import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import pokedex from "../img/pokedex.png";
import { useNavigate } from "react-router-dom";
import "../styles/poke-char.css";
const Characters = () => {
  const userName = useSelector((state) => state.name);
  const [charPokemons, setCharPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

   //pagination
  const [currentPage, setCurrentPage] = useState(1);
  
  const item = useSelector(state => state.items)
  
  const [postPage, setPostPage] = useState(item);
  
  const lastPostIndex = currentPage * postPage;
  
  const firstPostIndex = lastPostIndex - postPage;
  
  const currentpostPokeChar = charPokemons.slice(firstPostIndex, lastPostIndex);
  
  let pages = [];

  let totalPosts = charPokemons.length;

  for (let i = 1; i <= Math.ceil(totalPosts /postPage); i++) {
    pages.push(i);
  }


console.log(userName)
console.log(item)
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setCharPokemons(res.data.results));
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, []);

  //console.log(types)
  const searchCharacter = () => {
    navigate(`/characters/${pokemonName}`);
  };

  const selectType = (e) => {
    const url = e.target.value;
    axios.get(url).then((res) => setCharPokemons(res.data.pokemon));
  };

  const configuration = () => {
    navigate("/config");
  };

  //console.log(charPokemons);
  //console.log(charPokemons);   const lastPostIndex = currentPage * postPage;


  return (
    <div className="poke-char">
      <div className="pokebola-top-characters">
        <div className="poke-middle-characters">
          <div className="poke-middle-white-characters"></div>
        </div>
        <img src={pokedex} alt="pokedex" />
      </div>
      <div className="top-text">
        <h2>
          <span className="user-color"> Welcome {userName},</span> here you can
          find your favorite pokemon
        </h2>
      </div>
      <div className="container-input">
        <input
          className="input"
          type="text"
          onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
          placeholder="Search pokemon"
        />
        <button className="button1" onClick={searchCharacter}>
          Search
        </button>
        <select name="" id="" onChange={selectType}>
          {types.map((type) => (
            <option value={type.url} key={type.url}>
              {type.name.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <ul className="list-poke">
        {currentpostPokeChar.map((pokemon) => (
          <CharacterCard
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </ul>
      <div className="pagination">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <div className="icon-config" onClick={configuration}>
          <i className="fa-solid fa-gear"></i>
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

export default Characters;
