import { NavLink } from 'react-router-dom'
import '../css/navBar.css'

const activeStyle = {
    backgroundColor: 'orangered',

}

function Navbar() {
    return (
        <div id='NavBar'>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle : undefined}>메인페이지</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive}) => isActive? activeStyle : undefined}>마이페이지</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive? activeStyle : undefined}>로그인</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;