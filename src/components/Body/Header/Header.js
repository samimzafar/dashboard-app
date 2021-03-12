import React from 'react'

function Header() {
    return (
        <div className="header">
            <div>
                <i class='bx bx-menu-alt-left'></i>
            </div>
            <div className="header-icon">
                <i class='bx bx-bell'>
                    <span className="badge">2</span>
                </i>
                <i class='bx bx-message'></i>
                <i class='bx bx-chat'></i>
                <i class='bx bx-calendar-alt'></i>
            </div>
        </div>
    )
}

export default Header
