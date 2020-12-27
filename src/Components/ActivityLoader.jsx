import React, {useState} from 'react'
import axios from 'axios'
import ActivityCard from '../Components/ActivityCard'
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
    // const [submitted, setSubmitted] = useState(false)

    const requestNewActivity = async () => {
        const response = await axios.get('http://www.boredapi.com/api/activity/')
        console.log(response.data)
        setActivity(response.data)
    }

    // const handleActivityChange = (event) => {

    // }

    return (
        <>
            <Button color='primary' variant='contained' size='large' onClick={requestNewActivity}>
                Try something new
            </Button>
            <div className='activity-card'>
                <ActivityCard activity={activity}/>
            </div>
        </>
            )
       
}



export default ActivityLoader