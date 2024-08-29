import { useSearchParams } from "react-router-dom";
import { searchMenu } from "../api/MenuAPI";
import MenuItem from "../components/MenuItem";
import boxStyle from "./Menu.module.css"
import { useState, useEffect } from "react";

function MenuSearchResult() {

    // useSearchParam을 이용해 쿼리스트링으로 전달받은 값을 꺼낼 수 있다.
    const [searchParam] = useSearchParams();

    // console.log(searchParam.get('menuName'));
    const searchMenuName = searchParam.get('menuName');

    // 검색어를 받아옴 -> 검색어를 기준으로 데이터에서 찾아오기
    searchMenu(searchMenuName);

    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        setMenuList(searchMenu(searchMenuName))
    }, []);
    
    return (
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem menu={menu}></MenuItem>)}
            </div>
        </>
    )
}

export default MenuSearchResult;