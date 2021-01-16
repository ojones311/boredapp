import React, {useState, useEffect} from 'react'
import SearchResult from './SearchResult'
import {Button} from '@material-ui/core'
import axios from 'axios'
import '../Components/Styles/ProgrammableSearch.css'


const ProgrammableSearch = ({activity}) => {

    const fetchGoogleResults = async () => {
        try{
            let response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API_KEY}&cx=591758451358fdc45&q=${activity.activity}`)

            let data = response.data.items
            console.log('response',data)
            setResults(data)
        }catch(error){
            console.log('err', error)
        }    
    }
    const mapResultData = () => {
       let mappedResults = results.map((elem) => {
            return(
                <SearchResult key={elem.cacheId} result={elem}/>
            )
        })
        console.log('mapped')
        return mappedResults
    }
    const resetResults = () => {
        setResults([])
        console.log('reset')
    }
    const [results, setResults] = useState([]) 

    useEffect(() => {
       resetResults([])
    },[activity])

    let mapResults = mapResultData()

    return(
        <div>
            <div className='load-result-button'>
                <Button onClick={async () => await fetchGoogleResults()}> More Info
                </Button>
            </div>
            <div className='results' >
                {mapResults}
            </div>
        </div>
    )
}

export default ProgrammableSearch