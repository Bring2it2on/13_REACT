import {Menu} from './pages/Menu';
import About from './pages/About';
import Main from './pages/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
/* export : 컴포넌트를 다른 파일에서 사용하고 싶을 때 내보내는 역할
            1) function 바로 옆에 붙이면 객체로 묶어서 내보내기 때문에
               import할때 구조분해할당을 해주어야 한다.
            2) 하단에 export default [컴포넌트 이름]으로 사용할때는 default로 지정하기 때문에
               import할때 구조분해 할당을 하지 않아도 된다.
  import : 외부에 있는 컴포넌트를 가져오는 역할
          ./ : 현재 파일의 위치를 의미
          ../ : 현재 파일의 상위폴더 위치를 의미
*/

// function App() {
//   return (
//     <>
//       <Main/>
//       <About/>
//       <Menu/>
      
//     </>
//   );
// }

/*
  라우팅
  : 어떤 요청을 어디로 안내 및 매핑을 할 것인지를 정해놓고 진행하는 것
    리엑트에서는 요청에 따라 요청에 매핑된 컴포넌트를 렌더링한다.

    BrowserRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
    Routes : Route들을 묶어주는 단위(컴포넌트)
    Route : url 요청 주소와 컴포넌트를 매핑해주는 단위(컴포넌트)
*/

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Main/>}/> */}
          <Route index element={<Main/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
