import React, {useEffect} from 'react'


const ProgrammableSearch = () => {
    let url = "https://cse.google.com/cse.js?cx=591758451358fdc45"
    useEffect(() => {
        const script = document.createElement('script')
        script.src = url
        script.async = true 

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    },[url])
    return(
        <div>
            <script async src="https://cse.google.com/cse.js?cx=591758451358fdc45"></script>
            <div class="gcse-search"></div>
        </div>
    )
}

export default ProgrammableSearch