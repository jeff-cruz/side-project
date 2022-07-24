import React from 'react';
export default function PokemonList({ pokemon }) {
  return (
    <div className='pokemon-container'>
      <div>
        {pokemon.map(pokemon => (
          <div key={pokemon}>{pokemon}</div>
        ))}
      </div>
    </div>
  );
}
