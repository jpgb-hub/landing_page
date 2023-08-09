import React from "react";
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Muevo a la derecha */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{props.home}Home</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0"> {/* Dejo estos a la izquierda */}
                        <li className="nav-item">
                            <a className="nav-link active" href="#">{props.about}About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">{props.services}Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">{props.contact}Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

// Definir los valores props de Navbar
Navbar.propTypes = {
    start: PropTypes.string,
    home: PropTypes.string,
    about: PropTypes.string,
    services: PropTypes.string,
    contact: PropTypes.string,
}

export default Navbar;
