import React, {useState, useEffect} from 'react'
import SearchResult from './SearchResult'
import axios from 'axios'
import '../Components/Styles/ProgrammableSearch.css'


const ProgrammableSearch = ({activity}) => {
    const initialState = {
        searchTerm: activity.activity,
        googleResults: '',
        searchSubmitted: false,  
    }

    const fetchGoogleResults = async () => {
        try{
            let response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API_KEY}&cx=591758451358fdc45&q=${activity.activity}`)
            console.log('response',response.data.items)

            setResults(response.data.items)
        }catch(error){
            console.log('err', error)
        }    
    }
    const displayResults = () => {
        results.googleResults.map((result) => {
            return(
                <SearchResult result={result}/>
            )
        }) 
    }
    const [results, setResults] = useState(initialState)
    
    // useEffect(() => {

    // })
    return(
        <div>
            <div className='load-result-button'>
                <button onClick={fetchGoogleResults}>Load results</button>
            </div>
            {displayResults}
        </div>
    )
}

export default ProgrammableSearch