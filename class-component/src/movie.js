import React from 'react';
import PropTypes from 'prop-types';

function Movie ({title, summary, poster, year, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="move__summary">{summary}</p>
                <ul className="move__genres">
                    {genres.map((genres, index) => <li key={index}>{genres}</li>)}
                </ul>
            </div>
        </div>
    )}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
}

export default Movie;