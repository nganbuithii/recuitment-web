import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/employer/LoginPage";
import ForgotPassPage from "./pages/employer/ForotpassPage";
import HomePage from "./pages/students/HomePage";
import ErrorPage from "./pages/errorPage";
import ResetPassPage from "./pages/employer/ResetPassPage";
import StudentDashboard from "./pages/students/StudentDashboard";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/forgot-pass",
        element: <ForgotPassPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/reset-pass",
        // element: <ForgotPassPage />,
        element: <ResetPassPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/student-dashboard",
        element: <StudentDashboard />,
        errorElement: <ErrorPage />,
    },
]);
export default router;
