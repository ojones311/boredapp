import React from 'react'

const SearchResult = ({result}) => {
    // const classes = useStyles()
    return (
        <div className={`result ${result.cacheId}`}>
            {/* <img src={result.pagemap.cse_thumbnail[0]} alt={`pic${result.cacheId}`}></img> */}
            <a href={result.link}><h3>{result.title}</h3></a>
        </div>
    )
}


export default SearchResult