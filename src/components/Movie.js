import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import "./Movie.css"

// state가 필요 없을 경우 class component가 될 필요 없음

// 클릭시 다음 path의 component로 props를 보내며 이동
function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link to={{
            pathname: `movies/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <h4 className="renges">
                        {genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
                    </h4>
                    <p className="movie_summary">{summary.slice(0, 140)}</p>
                </div>
            </div>
        </Link>
    )
}
//우리가 얻어올 prop 확인
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie