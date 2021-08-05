import React from 'react'
import { useDispatch } from 'react-redux'
import './Header.css'
import { logout } from './features/userSlice'
import { auth } from './firebase'


// Icons
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccount from '@material-ui/icons/SupervisorAccount'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import Chat from '@material-ui/icons/Chat'
import Notifications from '@material-ui/icons/Notifications'
import HeaderOption from './HeaderOption'

function Header() {

    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__Left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header__Search">
                    <SearchIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="header__Right">
                <HeaderOption Icon={ HomeIcon } title="Home" />
                <HeaderOption Icon={ SupervisorAccount } title="My Network" />
                <HeaderOption Icon={ BusinessCenter } title="Jobs" />
                <HeaderOption Icon={ Chat } title="Messages" />
                <HeaderOption Icon={ Notifications } title="Notifications" />
                <HeaderOption onClick={ logoutOfApp } avatar={ true } title="Me" />
            </div>
        </div>
    )
}

export default Header
