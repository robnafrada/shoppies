import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const cors = 'https://cors-anywhere.herokuapp.com/'

    const search = (e) => {
        e.preventDefault();
        axios.get(`${cors}http://www.omdbapi.com/?t=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            console.log(res.data)
            setMovies(res.data)
        }).catch(err => {
            console.log(err.data)
        })
    }

    return(
        <>
        <h1>Search</h1>
        <form onSubmit={search}>
            <label>
                <input type="text"
                value={query}
                onChange={(event) => {setQuery(event.target.value)}}
                />
            </label>
            <button type="submit" value="submit">search</button>
        </form>
        </>
    )
}

export default Search;