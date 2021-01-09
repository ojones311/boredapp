import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../Components/Styles/ProgrammableSearch.css'

// const ProgrammableSearch = () => {
//     let url = "https://cse.google.com/cse.js?cx=591758451358fdc45"
//     useEffect(() => {
//         const script = document.createElement('script')
//         script.src = url
//         script.async = true 

//         document.body.appendChild(script)

//         return () => {
//             document.body.removeChild(script)
//         }
//     },[url])
//     return(
//         <div>
//             <script async src="https://cse.google.com/cse.js?cx=591758451358fdc45"></script>
//             <div class="gcse-search" ></div>
//         </div>
//     )
// }

// export default ProgrammableSearch

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
            // setResults(response.items)
        }catch(error){
            console.log('err', error)
        }    
    }
    const [results, setResults] = useState(initialState)
    return(
        <div>
            <button onClick={fetchGoogleResults}>Load results</button>
        </div>
    )
}

export default ProgrammableSearch