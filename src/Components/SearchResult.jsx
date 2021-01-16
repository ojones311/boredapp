import React from 'react'
const SearchResult = ({result}) => {
    // if(result.pagemap.cse_thumbnail){

    // }else if(result.pagemap){

    // }else{

    // }
    const chooseImageSource = () => {
        if(result.pagemap.cse_thumbnail){
            return result.pagemap.cse_thumbnail[0].src
        }else if(result.pagemap.metatags){
            return result.pagemap.metatags[0].image
        }else{
            return './pics/placeholderimg.png'
        }
    }
    let imgSrcSelection = chooseImageSource()

    return (
        <div className={`result`}>
            <img id='result-photo' src={imgSrcSelection} alt={`pic${result.cacheId}`}></img>
            <a href={result.link}><p>{result.title}</p></a>
        </div>
    )
}


export default SearchResult