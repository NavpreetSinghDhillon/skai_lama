import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import "./components/Login.css";
import Signup from "./components/Signup";
import GuestProject from "./components/GuestProject";
import AddPodcast from "./components/AddPodcast";
import EditTranscript from "./components/EditTranscript";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/guest/projects" element={<GuestProject />} />
        <Route path="/add-podcast" element={<AddPodcast />} />
        <Route path="/edit-transcript" element={<EditTranscript />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
