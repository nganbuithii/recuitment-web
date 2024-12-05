
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import './App.css';
import LoginPage from './pages/employer/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nha-doanh-nghiep/login" element={<LoginPage />} />


      </Routes>
    </Router>
  );
}

export default App;
