import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/addbook">Add Book</Link>
      <Link to="/books">Book List</Link>
    </nav>
  )
}

export default Header
