import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
    
  return (
    <div className="search">
        <div>
            <img src="search.svg" alt="search"/>

            <input
                type="text"
                // Background placeholder text for input element
                placeholder="Search through thousands of movies"
                value={searchTerm}
                // Handler for specific type of input event
                onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    </div>

  )
}

export default Search
