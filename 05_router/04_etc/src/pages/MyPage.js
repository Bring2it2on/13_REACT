import { Navigate } from "react-router-dom";

function MyPage() {

    const isLogin = false;

    if (!isLogin) {
        /*
            컴포넌트 내에서 권한이나 다른 특정 상황에 의해 다른 페이지를 이동하고 싶을때
            사용하는 Navigate 컴포넌트
            - useNavigate와 같지만, 함수식으로 사용할지, 컴포넌트 형태로 사용할지에 따라
            useNavigate와 Navigate 중에 선택하면 된다.
        */
        return <Navigate to="/login/"/>
    }

    return (
        <div>
            <h1>마이페이지</h1>
        </div>
    )
}

export default MyPage;