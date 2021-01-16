import React from 'react'
import ActivityLoader from '../Components/ActivityLoader'
import '../Components/Styles/MainPage.css'


const MainPage = () => {
    return (
        <div className='main-body'>
            <div className='flex-title'>
                <h1 id='B'>B</h1><h1 id='O'>O</h1><h1 id='R'>R</h1><h1 id='E'>E</h1><h1 id='D'>D</h1><h1 id='space'>~</h1><h1 id='A'>A</h1><h1 id='P'>P</h1><h1 id='P'>P</h1>
            </div>
            <div>
                
            </div>
            <div className='activity-loader'>
                <ActivityLoader />
            </div>
        </div>
    )
}


export default MainPage