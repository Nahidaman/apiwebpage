import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { useContext } from 'react'
import { CounterContext } from './context/ContextCounter'

function Nav() {
  const {count} = useContext(CounterContext)
  return (
    <>
    <div className="nav">
        <Link to={'/'} className='link'>Home</Link>
        <Link to={'/contact'} className='link'>Contact</Link>
        <Link to={'/about'} className='link'>About</Link>
        <Link to={'/cart'} className='link'>Cart🛒- {count}</Link>
    </div>
    

    </>
  )
}

export default Nav