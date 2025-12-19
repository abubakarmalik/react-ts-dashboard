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
import VitalTaskPage from '../pages/VitalTaskPage';
import MyTaskPage from '../pages/MyTaskPage';
import TaskCategoryPage from '../pages/TaskCategoryPage';
import SettingPage from '../pages/SettingPage';
import HelpPage from '../pages/HelpPage';
import NotFoundPage from '../pages/NotFoundPage';
import AddCategoryPage from '../pages/AddCategoryPage';

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
        <Route path="vital-task" element={<VitalTaskPage />} />
        <Route path="my-task" element={<MyTaskPage />} />
        <Route path="task-categories" element={<TaskCategoryPage />} />
        <Route path="task-categories/add" element={<AddCategoryPage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="helps" element={<HelpPage />} />
      </Route>
      {/* Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);
