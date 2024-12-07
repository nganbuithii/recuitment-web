
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import './App.css';
import LoginPage from './pages/employer/LoginPage';
import ForgotPassPage from './pages/employer/ForotpassPage';
import ResetPassPage from './pages/employer/ResetPassPage';
import HomePage from './pages/students/HomePage';
import RegisterPage from './pages/students/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nha-doanh-nghiep/login" element={<LoginPage />} />
        <Route path="/nha-doanh-nghiep/forgot-pass" element={<ForgotPassPage/>} />
        <Route path="/nha-doanh-nghiep/reset-pass" element={<ResetPassPage/>} />

        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>} />


      </Routes>
    </Router>
  );
}

export default App;
