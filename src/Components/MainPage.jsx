import React from 'react'
import ActivityLoader from '../Components/ActivityLoader'
import '../Components/Styles/MainPage.css'


const MainPage = () => {
    return (
        <div className='main-body'>
            <h1 id='main-title'>Bored App</h1>
            <div className='activity-loader'>
                <ActivityLoader />
            </div>
        </div>
    )
}


export default MainPage