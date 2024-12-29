import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/employer/LoginPage";
import ForgotPassPage from "./pages/employer/ForotpassPage";
import HomePage from "./pages/students/HomePage";
import ErrorPage from "./pages/errorPage";
import ResetPassPage from "./pages/employer/ResetPassPage";
import StudentDashboard from "./pages/students/StudentDashboard";
import BusinessLoggedLayout from "./layout/BusinessManageLayout/BusinessManageLayout";
import BusinessDashboard from "./pages/BusinessDashboard";

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
    {
        path: '/business',
        element: (
            <BusinessLoggedLayout>
                <BusinessDashboard />
            </BusinessLoggedLayout>
        )
    }
]);
export default router;
