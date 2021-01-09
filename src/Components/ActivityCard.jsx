import React, {useState} from 'react'
import ProgrammableSearch from '../Components/ProgrammableSearch'
import {Card} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const ActivityCard = ({activity, color}) => {

    const useStyles = makeStyles({
        root: {
            background: color,
            borderRadius: 6,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'black',
            padding: 20
        }   
    })

    const classes = useStyles()
    
    if(activity.activity !== '' && activity.link !== ''){
        return (
            <Card className={classes.root}>
                <h3>{activity.activity}</h3>
                <a href={activity.link}>Learn More</a>
                <ProgrammableSearch activity={activity}/>
            </Card>
        )
    }else if(activity.activity !== ''){
        return(
            <Card className={classes.root}>
                <h3>{activity.activity}</h3>
                <ProgrammableSearch activity={activity}/>
            </Card>
        )
    }else {
        return(
            <div></div>
        )      
    }  
}


export default ActivityCard