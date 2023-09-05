import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Routegaurd from "./components/Routegaurd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="" element={<Routegaurd />}>
          <Route path="/home" element={<>Hello world</>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
