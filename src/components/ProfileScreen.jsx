import React from 'react'
import './ProfileScreen.css'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import avatar from "../assests/avatar.jpg"
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

function ProfileScreen() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
  return (
    <div className='profileScreen'>
        <Navbar />
        <div className='profileScreen__body'>
            <h1>Profile</h1>
            <div className='profileScreen__info'>
                <img
                src={avatar}
                alt=""/>
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__buttons'>
                    <button className='profileScreen__Edit'>Edit</button>
                        <button onClick={() => {
                            auth.signOut();
                            navigate("/")
                            }} className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen