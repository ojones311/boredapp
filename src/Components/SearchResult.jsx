import React from 'react'

const SearchResult = ({result}) => {
    // const classes = useStyles()
    return (
        <div className='result'>
            <h3>{result.title}</h3>
            <a href={result.link}>{result.link}</a>
        </div>
    )
}


export default SearchResult