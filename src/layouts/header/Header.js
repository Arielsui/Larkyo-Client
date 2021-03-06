import React from 'react'
import { IndexLink, Link } from 'react-router'
import '../../styles/layout.scss'

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/login' activeClassName='route--active'>
      Login
    </Link>
  </div>
)

export default Header
