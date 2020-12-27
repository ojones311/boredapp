import React, {useState, useEffect} from 'react'
import {Button} from '@material-ui/core'

const  ActivityLoader = () => {
    const initialState = {
        activity : '',
        accessibility: 0,
        type: '',
        participants: 1,
        price: 0,
        link: '',
        key: ''
    }

    const [activity, setActivity] = useState(initialState)
    const [submitted, setSubmitted] = useState(false)

    const handleActivityChange = (event) => {
        
    }
    return (
        <Button color='primary' variant='contained' size='large' >
            Try something new
        </Button>
        )
}



export default ActivityLoader