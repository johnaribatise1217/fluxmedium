import LandingPage from "../Pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Medium from "../Pages/MediumPage/Medium";
import Write from "../Pages/ArticlePage/AddArticle/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/medium" element={<Medium/>} />
        <Route path="/write" element={<Write/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
