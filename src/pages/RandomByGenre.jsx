import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import GenresSelect from "../components/GenresSelect";
import styles from "../App.module.css";

function RandomByGenre() {
  const { isLoggedIn, username } = useAuth();

  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        <h2>Choose a genre to get a random movie!</h2>
        <GenresSelect />
      </div>
      <Footer />
    </div>
  );
}

export default RandomByGenre;
