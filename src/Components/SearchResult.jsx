import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       '& > *': {
//         margin: theme.spacing(1),
//         width: theme.spacing(16),
//         height: theme.spacing(16),
//       },
//     },
//   }));

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