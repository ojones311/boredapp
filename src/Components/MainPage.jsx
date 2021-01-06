import React from 'react'
import ActivityLoader from '../Components/ActivityLoader'
import '../Components/Styles/MainPage.css'

const MainPage = () => {
    return (
        <div className='main-body'>
            <h1 id='main-title'>Bored App</h1>
            <h3>Load an activity if you're bored</h3>
            <div className='activity-loader'>
                <ActivityLoader />
            </div>
        </div>
    )
}


export default MainPage