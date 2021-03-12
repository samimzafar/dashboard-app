import React from 'react';
import logo from '../../assets/INDEX.svg';
import oval from '../../assets/Oval.png';
function Sidebar() {
    return (
        <div className='side-bar'>
            <div className="side-bar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="side-bar-info">
                <div>
                    <img src={oval} alt="dp" />
                </div>
                <div className="side-bar-info-name">
                    <p>John Doe</p>
                    <i class='bx bx-chevron-down'></i>
                </div>

            </div>
            <div className="side-bar-icon">
                <div>
                    <div>
                        <i class='bx bx-home'></i>
                        <p>Dashboard</p>
                    </div>
                    <p className="color-red">5</p>
                </div>
                <div>
                    <div>
                        <i class='bx bx-user'></i>
                        <p>Profile</p>
                    </div>
                    <p></p>
                </div>
                <div>
                    <div>
                        <i class='bx bx-message-rounded-detail'></i>
                        <p>Chat</p>
                    </div>
                    <p></p>
                </div>
                <div>
                    <div>
                        <i class='bx bx-calendar-check'></i>
                        <p>Calender</p>
                    </div>
                    <p></p>
                </div>
                <div>
                    <div>
                        <i class='bx bx-edit-alt'></i>
                        <p>Notice Board</p>
                    </div>
                    <p className="color-green">3</p>
                </div>
                <div>

                    <div>
                        <i class='bx bx-calendar-edit'></i>
                        <p>Class Routine</p>
                    </div>
                    <p></p>
                </div>
                <div>
                    <div>
                        <i class='bx bx-video'></i>
                        <p>Live Class</p>
                    </div>
                    <p></p>
                </div>
                <div>

                    <div>
                        <i class='bx bx-question-mark'></i>
                        <p>Attendance</p>
                    </div>
                    <p className="color-blue">21</p>
                </div>
                <div>

                    <div>
                        <i class='bx bx-note'></i>
                        <p>Assessments</p>
                    </div>
                    <p></p>
                </div>
                <div>
                    <div>
                        <i class='bx bx-notepad'></i>
                        <p>Assignments</p>
                    </div>
                    <p className="color-red">2</p>
                </div>
                <div>
                    <div>
                        <i class='bx bx-bar-chart'></i>
                        <p>Results</p>
                    </div>
                    <p>
                        <i class='bx bx-chevron-right'></i>
                    </p>
                </div>
                <div>

                    <div>
                        <i class='bx bx-book-alt'></i>
                        <p>Course</p>
                    </div>
                    <p></p>
                </div>
                <div>

                    <div>
                        <i class='bx bx-collection'></i>
                        <p>Lectures</p>
                    </div>
                    <p></p>
                </div>
                <div>
                    <div>
                        <i class='bx bx-dollar'></i>
                        <p>Fee Collection</p>
                    </div>
                    <p></p>

                </div>
                <div>
                    <div>
                        <i class='bx bx-book-open'></i>
                        <p>Scholorship</p>
                    </div>
                    <p></p>
                </div>
                <div>
                    <div>
                        <i class='bx bx-extension'></i>
                        <p>FAQ</p>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
