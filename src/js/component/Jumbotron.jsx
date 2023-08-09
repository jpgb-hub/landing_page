import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = (props) => {
    return (
        <div className="bg-light p-5 rounded-lg m-3">
            <h1 className="display-4">A warm Welcome!</h1>
            <p className="lead">{props.title}</p>
            <hr className="my-4" />
            <p>{props.text}"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."</p>
            <a className="btn btn-primary btn-lg" href={props.link} role="button">{props.txt_button}Call to action!</a>
        </div>
    );
};

// Definir los valores props de jumbotron
Jumbotron.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    txt_button: PropTypes.string,
}

export default Jumbotron;
