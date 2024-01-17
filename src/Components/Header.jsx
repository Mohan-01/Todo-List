import React from 'react'

const Header = ({setForm}) => {
  return (
    <header>
        <div className="main-heading">
          <h2>Your TODO's</h2>
          <div className="add-btn">
            <button type='button' onClick={() => setForm(true)}>Add Task</button>
          </div>
        </div>
    </header>
  )
}

export default Header
