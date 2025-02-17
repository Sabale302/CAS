import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppSidebar from './components/Sidebar'; 
import HomePage from './pages/HomePage';  
import StudentsPage from './pages/StudentsPage';  
import FacultyPage from './pages/FacultyPage';  
import ReportsPage from './pages/ReportsPage'; 
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import './App.css';  

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <AppSidebar />
        
        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
