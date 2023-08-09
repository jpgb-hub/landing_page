import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container"> 
                <Jumbotron />
                <Cards />
            </div>
        </>
    );
};

export default Home;

