import { combineReducers } from "redux";
import pokemonReducer from "./PokemonModules";

const rootReducer = combineReducers({
    pokemonReducer
});

export default rootReducer;