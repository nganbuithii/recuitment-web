
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import './App.css';
import LoginPage from './pages/employer/LoginPage';
import ForgotPassPage from './pages/employer/ForotpassPage';
import ResetPassPage from './pages/employer/ResetPassPage';
import HomePage from './pages/students/HomePage';
import store from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-pass" element={<ForgotPassPage />} />
          <Route path="/reset-pass" element={<ResetPassPage />} />

          <Route path="/" element={<HomePage />} />


        </Routes>
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
