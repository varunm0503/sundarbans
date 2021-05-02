import React from 'react'

const Search = (props: {term, setTerm: Function}) => {
    return (
        <>
            <input 
             type="text"
             placeholder="Search products..."
             onChange={(e) => props.setTerm(e.target.value)}
             value={props.term}
            ></input>
        </>
    )
}

export default Search;