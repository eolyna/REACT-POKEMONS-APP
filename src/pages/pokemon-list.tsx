import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/pokemon-service';
import { Link } from 'react-router-dom';

  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    // appel vers notre simulation d'api rest
    //get pour récup les pokemons grace à la méthode fetch
    // fetch("http://localhost:3001/pokemons")
    // on récupére l'objet response de la part de fetch , la methode json permet d'extraire ces données
    // .then(response => response.json())
    // .then((pokemons) =>{
      // setPokemons(pokemons)
    // })
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
  }, []);
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
        <Link className='btn-floating btn-large waves-effect waves-light red z-depth-3'
        style = {{position:'fixed',bottom: '25px',right:'25px'}}
        to="/pokemon/add"
        >
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div> 
  );
}
  
export default PokemonList;
