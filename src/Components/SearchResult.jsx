import React from 'react'

const SearchResult = ({result}) => {
    // if(result.pagemap.cse_thumbnail){

    // }else if(result.pagemap){

    // }else{

    // }
    // const chooseImageSource = () => {
    //     if(result.pagemap.cse_thumbnail){
    //         return result.pagemap.cse_thumbnail[0].src
    //     }else if(result.pagemap.metatags){
    //         return result.pagemap.metatags[0].image
    //     }else{
    //         return ''
    //     }
    // }
    return (
        <div className={`result ${result.cacheId}`}>
            {/* <img src={} alt={`pic${result.cacheId}`}></img> */}
            {/* {chooseImageSource()} */}
            <a href={result.link}><h3>{result.title}</h3></a>
        </div>
    )
}


export default SearchResult