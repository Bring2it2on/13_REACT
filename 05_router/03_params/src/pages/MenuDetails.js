import { useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuAPI";
import { useEffect, useState } from "react";

function MenuDetails() {

    const { menuCode } = useParams();
    /* 개발할 때 useState를 빈객체로 초기화해도 되지만, menu의 형태를 임시로 써놓으면 도움이 된다. */
    const [menu, setMenu] = useState({
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail: {}
    });

    // console.log(menuCode);
    // menuCode에 따라 유동적으로 처리를 할 수 있다.

    useEffect(() => {
        console.log(getMenuDetail(menuCode));
        setMenu(getMenuDetail(menuCode));
    }, []); 

    console.log(menu);
    
    return (
        <>
            <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름: {menu.menuName}</h3>
            <h3>메뉴 가격: {menu.menuPrice}</h3>
            <h3>메뉴 종류: {menu.categoryName}</h3>
            <h3>메뉴 설명: {menu.detail.description}</h3>

            <img src={menu.detail.image} style={{maxWidth: 500}}/>
        </>
    )
}

export default MenuDetails;