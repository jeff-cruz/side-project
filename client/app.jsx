import React, { useState, useEffect } from 'react';
import Container from './components/container';
import NavBar from './components/navbar';
import PokemonList from './components/pokemonlist';
import Pagination from './components/pagination';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [prevPage, setPrevPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPage, {
      // eslint-disable-next-line no-return-assign
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setLoading(false);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
        setPokemon(res.data.results.map(pokemon => pokemon.name));
      });

    return () => cancel();
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage(nextPage);
  }

  function goToPrevPage() {
    setCurrentPage(prevPage);
  }

  if (loading) return 'Loading...';
  return (
    <>
      <NavBar/>
      <Container>
        <PokemonList pokemon={pokemon} />
        <Pagination
          goToNextPage={nextPage ? goToNextPage : null}
          goToPrevPage={prevPage ? goToPrevPage : null}
        />
      </Container>
    </>
  );
}

export default App;
