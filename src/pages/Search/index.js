import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setPokemon} from "../../redux/pokemonSearch"
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import TypeMenu from "../../components/TypeMenu"

function Search() {
    const { pokemonName } = useSelector((state) => state.search)
    const [loading, setLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState([]);
    const [url, setUrl] = useState("")

    const initialURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    function getPokemon(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }

    useEffect(() => {
        // setUrl(initialURL + pokemonName)
        async function fetchData() {
            let response = await getPokemon(initialURL);
            await setPokemonData(response);
            setLoading(false);
          }
          fetchData();
    }, [pokemonName])   //pState => pokemonName

  return (
      <div style={{marginTop: "70px"}}>
          <TypeMenu />
          {pokemonData.name === undefined ?
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "75vh"}}>
            <h1>Pokemon Not Found</h1>
          </div>
          :
          <>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75vh"}}>
            <div style={{width: "250px"}}>
                <Card pokemon={pokemonData}/>
            </div>
          </div>
          </>
          }
          <Footer />
      </div>
  );
}

export default Search;