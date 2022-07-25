import React from 'react';
export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map(names => (
        <div key={names}>{names}</div>
      ))}
    </div>
  );
}
