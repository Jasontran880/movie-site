import React from 'react';
import { useState } from 'react'
import Search from './components/Search.jsx'

const App = () => { 
  // Create a search state within the main application and pass the state fields as props to the Search component, for the sake of global scope
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>  
           <img src="./hero.png" alt="Hero Banner"/>
          <h1> Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle </h1>
        </header>

        {/* Search component for movie search */}
        {/* Pass state fields as props into Search component */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      </div>
      
    </main>
  )
}

export default App
