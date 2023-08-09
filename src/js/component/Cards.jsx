import React from "react";
import PropTypes from 'prop-types';
import descargaImage from '../../img/descarga.png'


const Cards = (props) => {
    return (
        <div className="card-group">
            <div className="card m-3">
            <img src={descargaImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
            <div className="card m-3">
            <img src={descargaImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
            <div className="card m-3">
            <img src={descargaImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
            <div className="card m-3">
            <img src={descargaImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>
        </div>
    )
}

//definir los valores props de Cards//

Cards.propTypes = {
    start: PropTypes.string,
    home: PropTypes.string,
    about: PropTypes.string,
    services: PropTypes.string,
    contact: PropTypes.string,

}

export default Cards;