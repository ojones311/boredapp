import React,{useEffect} from 'react'


const ProgrammableSearch = () => {
    
    useEffect(() => {
        const script = document.createElement('script')
        script.src = "https://cse.google.com/cse.js?cx=591758451358fdc45"
        script.async = true 

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    },[])
    
    document.body.appendChild(script)
    return(
        <div>
            <script async src="https://cse.google.com/cse.js?cx=591758451358fdc45"></script>
            <div class="gcse-search"></div>
            <p>ty</p>
        </div>
    )
}

export default ProgrammableSearch