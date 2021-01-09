import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const SearchResult = ({result}) => {
    return (
        <div className='single-result'>
                <h3>{result.title}</h3>
                <a href={result.link}>{result.link}</a>
            </div>
    )
}


export default SearchResult