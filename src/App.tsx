import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Routegaurd from "./components/Routegaurd";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/chat/:chatId"
          element={
            <Layout>
              <Chat />
            </Layout>
          }
        />
        <Route path="" element={<Routegaurd />}></Route>
      </Routes>
    </>
  );
}

export default App;
