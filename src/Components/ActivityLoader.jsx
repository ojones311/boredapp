import React, {useState} from 'react'
import axios from 'axios'
import ActivityCard from '../Components/ActivityCard'
import '../Components/Styles/ActivityLoader.css'
import {Button} from '@material-ui/core'

const ActivityLoader = () => {
    const initialState = {
        activity : '',
        accessibility: 0,
        type: '',
        participants: 1,
        price: 0,
        link: '',
        key: ''
    }

    const setRandomColor = () => {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
         setColor(randomColor)
    }


    const requestNewActivity = async () => {
        try{
            const response = await axios.get('http://www.boredapi.com/api/activity/')
            console.log(response.data)
            setActivity(response.data)
        }catch(error){
            console.log('err', error)
        }   
    }

    const handleAllActivity = async () => {
        requestNewActivity()
        setRandomColor()
    }
    
    const [activity, setActivity] = useState(initialState)
    const [color, setColor] = useState('')
    
    return (
        <>
            <Button color='primary' variant='contained' size='large' onClick={handleAllActivity}>
                Try something new
            </Button>
            <div className='activity-card'>
                <ActivityCard activity={activity} color={color} />
            </div>
        </>
            )
       
}



export default ActivityLoader