import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

function RandomByGenre(){

  const { isLoggedIn, username } = useAuth();

    return (
        <div>
            <h2>
                Choose a genre to get a random movie!
            </h2>
        </div>
    );
}

export default RandomByGenre;
