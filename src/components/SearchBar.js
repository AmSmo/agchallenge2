import React, { useState } from 'react'

const SearchBar = ({ submitHandler, findTheBottom }) => {
    const [location, setLocation] = useState("")
    return (
        <div>
            <form onSubmit={(e) => submitHandler(e, location)}>
                <input onChange={(e) => setLocation(e.target.value)} type="text" value={location} placeholder="Location" />
                <input type="submit" value="Find Terrible Garage" />
            </form>
            <button onClick={(e) => findTheBottom(e, location)}>Last 50 In a city</button>
        </div>
    )

}

export default SearchBar