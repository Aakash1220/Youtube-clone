import React, {useState} from 'react'
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import { Link } from 'react-router-dom';


function Header() {
    const [inutSearch, setInputSearch] = useState('')
    return (
        <div className="header" style={{backgroundColor:'white'}}>
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/512px-YouTube_Logo_%282013-2017%29.svg.png" al/>
                </Link>
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" onChange={(e) => setInputSearch(e.target.value)} value={inutSearch} />
                <Link to={`/search/${inutSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>

            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar src="https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png" />
            </div>
        </div>
    )
}

export default Header
