import { startLoadingPokemons } from './pokemonSlice';

export const getPokemons = ( page = 0 ): any => {
    return async(dispatch: any, getState: any) => {
        dispatch( startLoadingPokemons() );

        // TODO: http request

        // dispatch( setPokemons() );
    }
}

