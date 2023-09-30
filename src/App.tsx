import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Routegaurd from "./components/Routegaurd";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Chat from "./pages/Chat";
import SearchChat from "./components/SearchChat";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Routegaurd />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <SearchChat />
              </Layout>
            }
          />
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
