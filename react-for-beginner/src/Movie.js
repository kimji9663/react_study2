import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){ //props 받아올 때는 중괄호 사용
    return (
        <div>
            <img src={coverImg} alt="movie" />
            <h2>
                <Link to={`/move/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;