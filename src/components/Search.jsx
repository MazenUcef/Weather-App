import React from 'react'

const Search = ({ setSearch, search }) => {
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <input
                value={search}
                onChange={handleChange}
                style={{ width: "100%", borderRadius: "10px", border: "none", padding: "10px" }}
                type="text"
                placeholder="Enter city name" />
            <button style={{ marginTop: "20px", padding: "10px", borderRadius: "50px", border: 'none' }}>Search</button>
        </div>
    )
}

export default Search