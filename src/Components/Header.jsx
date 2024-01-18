/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = ({setForm}) => {
  return (
    <header>
        <div className="main-heading">
        <a href='#' className="logo-div">
          <img src='/logo.png' alt="logo" />
          <h2>Your TODO's</h2>
        </a>
          <div className="add-btn">
            <button type='button' onClick={() => setForm(true)}>Add Task</button>
          </div>
        </div>
    </header>
  )
}

export default Header
