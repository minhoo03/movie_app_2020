import React from 'react'
import PropTypes from 'prop-types'

// state가 필요 없을 경우 class component가 될 필요 없음

function Movie({id, year, title, summary, poster}){
    return(
        <div>
            <h4>{title}</h4>
        </div>
    )   
}
//우리가 얻어올 prop 확인
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie