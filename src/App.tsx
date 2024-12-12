
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom'; import './App.css';
import LoginPage from './pages/employer/LoginPage';
import ForgotPassPage from './pages/employer/ForotpassPage';
import ResetPassPage from './pages/employer/ResetPassPage';
import HomePage from './pages/students/HomePage';
import store from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import router from './routes';

function App() {
  return (
    <Provider store={store}>
     <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
