import React from 'react'


const ActivityCard = ({activity}) => {
    if(activity){
        return (
            <h3>{activity.activity}</h3>
            
        )
    }else {
        return(
            <div></div>
        )
    }
    
}


export default ActivityCard