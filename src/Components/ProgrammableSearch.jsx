import React, {useState, useEffect} from 'react'
import SearchResult from './SearchResult'
import axios from 'axios'
import '../Components/Styles/ProgrammableSearch.css'


const ProgrammableSearch = ({activity}) => {
   
    // const displayResults = async () => {
    //     console.log(results)
    //    await results.googleResults.map((result) => {
    //         return(
    //             <SearchResult result={result}/>
    //         )
    //     }) 
    // }

    const fetchGoogleResults = async () => {
        try{
            let response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API_KEY}&cx=591758451358fdc45&q=${activity.activity}`)
            console.log('response',response.data.items)

            setResults(response.data.items)
            console.log(results)
            // displayResults()
        }catch(error){
            console.log('err', error)
        }    
    }
    
    const [results, setResults] = useState('')
    
    useEffect(() => {
        console.log(results)
    })
    return(
        <div>
            <div className='load-result-button'>
                <button onClick={fetchGoogleResults}> More Info</button>
            </div>
            {/* <div className='results'>
                {displayResults}
            </div> */}
        </div>
    )
}

export default ProgrammableSearch