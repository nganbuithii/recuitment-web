
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import './App.css';
import LoginPage from './pages/employer/LoginPage';
import ForgotPassPage from './pages/employer/ForotpassPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nha-doanh-nghiep/login" element={<LoginPage />} />
        <Route path="/nha-doanh-nghiep/forgot-pass" element={<ForgotPassPage/>} />


      </Routes>
    </Router>
  );
}

export default App;
