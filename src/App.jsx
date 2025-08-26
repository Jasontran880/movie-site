import React from 'react';
import { useEffect, useState } from 'react'
import Search from './components/Search.jsx'

// Handling Movie Database API  
const API_BASE_URL = 'https://api.themoviedb.org/3';
// reference to the private API Key for API requests
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    // API returns json objects
    accept: 'application/json',
    // Verifies WHO is trying to make the API request
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => { 
  // Create a search state within the main application and pass the state fields as props to the Search component, for the sake of global scope
  const [searchTerm, setSearchTerm] = useState('');

  // to display the error of a program on the screen
  const [errorMessage, setErrorMessage] = useState('');

  // Function for calling API
  // Use Async function for the 'await' keyword: suspends function's execution until the Promise settles: either resolves with a value or rejects with an error
  const fetchMovies = async () => {
    try {
      // set the endpoint (the api url you are trying to recieve info from)
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

      // call the api
      const response = await fetch(endpoint, API_OPTIONS)
    } catch (error){
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later baka');
    }
  }



  // We only want this to load once at the beginning of the program
  //
  useEffect(()=> {

  }, [])
  // the empty array above is an empty dependency array which says that the effect will only activate if the values in the dependency array change

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>  
           <img src="./hero.png" alt="Hero Banner"/>
          <h1> Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle </h1>
        
          {/* Search component for movie search */}
          {/* Pass state fields as props into Search component */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        </header>

        <section className="all-movies">

          <h2>All Movies </h2>


          {/* Conditional rendering of errorMessage */}

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        </section>
        

      </div>
      
    </main>
  )
}

export default App
