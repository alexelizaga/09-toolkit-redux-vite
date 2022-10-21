import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const dispatch = useAppDispatch();
  const { isLoading, pokemons = [], page } = useAppSelector(state => state.pokemon);

  useEffect(() => {
    dispatch( getPokemons() );
  }, [])
  
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? 'True' : 'False' }</span>

        <ul>
          {
            pokemons.map( ({name}) => (
              <li key={name}>{ name }</li>
            ))
          }
        </ul>

        <button
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons(page) ) }
        >
          Next
        </button>
    </>
  )
}
