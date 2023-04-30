import React, {FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';

  
const App: FunctionComponent = () => {


 return (
   
   <BrowserRouter>
<nav>
<div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">Pokédex</Link>
        </div> 
</nav>
<Routes>
  
  <Route path="/" element={<PokemonList />} />
  <Route path="/pokemons" element={<PokemonList />} />
  <Route path="/pokemon/add" element={<PokemonAdd/>} />
  <Route path ="/pokemons/edit/:id"element={<PokemonEdit/>}/>
  <Route path="/pokemons/:id" element={<PokemonsDetail/>} />
 
</Routes>

</BrowserRouter>

 );

}
 
  
export default App;