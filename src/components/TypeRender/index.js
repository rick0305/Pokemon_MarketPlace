import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Card from "../Card"
import { getPokemon, getAllPokemon } from './pokemon';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';
import TypeMenu from '../TypeMenu';

function TypeRender() {
    const { value } = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const initialURL = `https://pokeapi.co/api/v2/type/${value}`;

    // const [pokemonData, setPokemonData] = useState([]);
    // const [teste, setTeste] = useState([]);

    // const getPokemon = async () => {
    //     const toArray = [];
    //     try {
    //       const url = `https://pokeapi.co/api/v2/type/${value}`;
    //       const res = await axios.get(url);
    //       toArray.push(res.data);
    //       setPokemonData(toArray);
    //         console.log(pokemonData)
    //     } catch (e) {
    //       console.log(e);
    //     }
    //     fetch(`https://pokeapi.co/api/v2/type/${value}`)
    //     .then(response => response.json())
    //     .then(allpokemon => console.log(allpokemon))
    //   }

    // const getPokemon = async () => {
    //     await fetch(`https://pokeapi.co/api/v2/type/${value}`)
    //     .then(response => response.json())
    //     .then(allpokemon => setTeste(allpokemon.pokemon));
    // }

    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/type/${{value}}`)
    //     .then(response => response.json())
    //     .then(allpokemon => setTeste(allpokemon.pokemon));
    //     console.log(teste)
    // }, [])

    //esse funciona
    // useEffect(() => {
    //     async function getData() {
    //         const url = `https://pokeapi.co/api/v2/type/${value}`;
    //         const res = await axios.get(url);
    //         console.log(res.data)
    //     }
    //     getData()
    // })

    useEffect(() => {
        async function fetchData() {
          let response = await getAllPokemon(`https://pokeapi.co/api/v2/type/${value}`);                                                                                                                               
          console.log(response.pokemon)
          await loadPokemon(response.pokemon); //aqui foi feita a altera
          setLoading(false);
        }
        fetchData();
      });

    const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
        data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.pokemon);
        return pokemonRecord;
        })
    );
    setPokemonData(_pokemonData);
    };

  return (
    <div style={{overflowY: "scroll", height: "100vh"}}>
        <TypeMenu />
        <h1>value: {value}</h1>
      {loading ? (              
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <div>
          <div className="grid-container" >
            {pokemonData.map((pokemon, i) => {
                if(pokemon.id > 160) return
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
        </div>
      )}
    <Footer />
    <ToastContainer toastStyle={{color: "black"}} />
    </div>
  );
}

export default TypeRender;