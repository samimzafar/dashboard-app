import React from 'react'
import Header from './Header/Header'
import StudentDashboard from './StudentDashboard/StudentDashboard'
function Body() {
    return (
        <div className="body">
            <Header/>
            <StudentDashboard/>
        </div>
    )
}

export default Body
