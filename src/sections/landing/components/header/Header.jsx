import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './header.scss'

import { logo } from '../../assets/images'

import { userLogout } from 'src/store/reducers/user';

const Header = () => {
  const logined = useSelector(state => state.users.logined.success)
  const dispatch = useDispatch()
  
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  
  const handleLogout = async() => {
    await dispatch(userLogout({user}))
  };

  return (
    <div className='header'>
      <div className='header__inner container'>
        <div className='header__logo'>{/* <img src={logo} alt="" /> */}</div>
        <ul className='header__nav'>
          {logined ? (
            <>
              <li>
                <a href='/overview'>Overview</a>
              </li>
              <li>
                <Link onClick={()=>handleLogout()}>Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
