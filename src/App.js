import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Medium from "./Pages/MediumPage/Medium";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/medium" element={<Medium/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
