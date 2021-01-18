import React from 'react';

const Results = ({movies}) => {
    
    return(
        <>
        <h1>Results</h1>
        {movies.map(movie => {
            return(
                <div>
                    <img src={movie.Poster} alt="movie poster"/>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Year}</p>
                    <button>Nominate</button>
                </div>
            )
        })}
        </>
    )
}

export default Results;