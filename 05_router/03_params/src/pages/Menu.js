import { useState, useEffect } from "react";
import { getMenuList } from "../api/MenuAPI";
import MenuItem from "../components/MenuItem";
import boxStyle from "./Menu.module.css"
import { useNavigate } from "react-router-dom";

function Menu() {

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    // Menu 컴포넌트가 마운트 되기전에 데이터를 가져와서 state에 담기
    useEffect(() => {
        //  데이터를 가져오는 로직
        // console.log(getMenuList());

        // json형태로 파싱된 데이터는 table형태로 뽑을 수 있다.
        // table이 나오지 않으면 파싱이 제대로 안된 것
        // console.table(getMenuList());
        
        setMenuList(getMenuList());
        
    }, []);
    const onClickHandler = () => {
        console.log(searchValue);

        navigate(`/menu/search?menuName=${searchValue}`)
        
    }

    return (
        <>
            <h1>판매 메뉴 목록</h1>
            <div>
                <input type="search" name="menuName" onChange={(e) => {setSearchValue(e.target.value)}}/>
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {/* 메뉴 컴포넌트를 반복해서 보여줄 예정 */}
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}></MenuItem>)}
            </div>
        </>
    )
}

export default Menu;