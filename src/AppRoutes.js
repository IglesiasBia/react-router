import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import AboutMe from "./pages/aboutMe";
import Home from "./pages/home";


function AppRoutes() {
  return (
    <BrowserRouter>
        <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutMe" element={<AboutMe/>}/>
        <Route path="*" element={<h1>Página não encontrada</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
