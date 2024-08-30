import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Pokemons from "./pages/Pokemons";
import Main from "./pages/Main";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path="main" element={<Main />}/>
          <Route path="pokemons" element={<Pokemons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
