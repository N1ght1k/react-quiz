import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">
      Пыщь
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">Опросы</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/auth" className="nav-link">Авторизация</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/quiz-creator" className="nav-link">Создать опрос</NavLink>
      </li>
    </ul>
  </nav>
)