import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RequireAuth, RequireGuest } from "./components/AuthMiddleware";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<RequireGuest><Signup /></RequireGuest>} />
            <Route path="/login" element={<RequireGuest><Login /></RequireGuest>} />
            <Route path="/quiz/:id" element={<RequireAuth><Quiz /></RequireAuth>} />
            <Route path="/result/:id" element={<RequireAuth><Result /></RequireAuth>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
