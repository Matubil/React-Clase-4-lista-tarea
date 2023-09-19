import React, { Component } from 'react'; //snippet imrc
import "bootstrap/dist/css/bootstrap.css"; 

class Cabecera extends Component { //snippet cc
    state = { }
    render() {
        let {titulo, subtitulo} = this.props;
        return (
            <header className="alert alert-info text-center">
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
            </header>
        );
    }
}

export default Cabecera;