import { NavLink } from 'react-router-dom'
import '../css/navBar.css'

const activeStyle = {
    backgroundColor: 'orangered',

}

function Navbar() {
    return (
        <div id='NavBar'>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle : undefined}>Home</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => isActive? activeStyle : undefined}>소개</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive? activeStyle : undefined}>메뉴목록</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;