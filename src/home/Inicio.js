import React from 'react';
import Banner from './Banner';
import Conocenos from './Conocenos';
import Informacion from './Informacion';
import Populares from './Populares';

function Inicio(props) {
    return (
        <>
            <Banner/>
            <Conocenos/>
            <Populares/>
            <Informacion/>

        </>
    );
}

export default Inicio;