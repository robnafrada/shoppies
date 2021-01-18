import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import Nominees from './components/Nominees/Nominees';

// const nomineeReducer = (state, action) => {
//   switch(action.type) {
//     case "nominate":
//       const duplicateMovie = state.find(value => value.id === action.movie.imdbID)
//   }
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  // const [nominee, setNominee] = useReducer(nomineeReducer, [])

  return (
    <>
    <h1>The Shoppies</h1>
    <Search setMovies={setMovies} query={query} setQuery={setQuery} />
    <Results movies={movies} />
    <Nominees />
    </>
  );
}

export default App;
