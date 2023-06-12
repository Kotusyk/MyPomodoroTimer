import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <a href="#default" class="logo">Pomodoro</a>
        <div class="header-right">
            <a class="active" href="#home">Home</a>
            <a href="#taskList">Task List</a>
            <a href="#about">About</a>
            <a href="#donation">Support</a>
        </div>
    </div>
  )
}

export default Header;
