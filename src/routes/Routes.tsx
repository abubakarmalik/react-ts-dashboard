import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Route>
      {/* Dashboard routes */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      {/* Not Found */}
      <Route path="*" element={<div>404</div>} />
    </>,
  ),
);
