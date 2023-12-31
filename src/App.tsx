import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Routegaurd from "./components/Routegaurd";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Chat from "./pages/Chat";
import SearchChat from "./components/SearchChat";
import Profile from "./components/Profile";
import { Toaster } from "./components/ui/toaster";
import { useDispatch } from "react-redux";
import { updateTheme } from "./redux/features/theme";

function App() {
  const dispatcher = useDispatch();
  const setTheme = localStorage.getItem("theme");
  if (setTheme) {
    if (setTheme === "dark") {
      dispatcher(updateTheme({ theme: "dark" }));
    }
  }
  return (
    <>
      <Toaster />
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
