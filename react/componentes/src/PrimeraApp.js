import React from 'react'
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo,subtitulo}) => {
    return (
        <>
            {/* <pree>{JSON.stringify(saludo,null,3)}</pree> */}
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
            <button>+</button>
        </>
    )
}

PrimeraApp.propTypes={
    saludo  :PropTypes.string.isRequired
}

PrimeraApp.defaultProps={
    subtitulo:"Soy subtitulo"
}

export default PrimeraApp;