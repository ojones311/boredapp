import React, {useState, useEffect} from 'react'
import SearchResult from './SearchResult'
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
    const rateThrottle = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    const [results, setResults] = useState([]) 
    const [count, setCount] = useState(0)

    useEffect(() => {
       resetCount()
    },[activity])

    return(
        <div>
            <div className='load-result-button'>
                <button onClick={async () => await fetchGoogleResults()}> More Info</button>
                <button onClick={rateThrottle}>load </button>
                <p>{count}</p>
            </div>
            <div className='results'>
            {results.map((elem) => {
                        return(
                            <SearchResult key={elem.i} result={elem}/>
                        )
                    })}
            </div>
        </div>
    )
}

export default ProgrammableSearch