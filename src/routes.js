import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import UserList from 'src/pages/UserList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import PostList from 'src/pages/PostList';
import Register from 'src/pages/Register';
import Category from 'src/pages/Category';
import AddUser from 'src/pages/AddUser';
import AddPost from 'src/pages/AddPost';
import Home from './pages/Home';
import ArticlePage from './pages/Article';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'users', element: <UserList />, },
      { path: 'users/adduser', element: <AddUser /> },
      { path: 'posts/addpost', element: <AddPost /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'posts', element: <PostList /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'user',
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '/', element: <Navigate to="/user/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'article', element: <ArticlePage /> },
      { path: 'categories', element: <Category /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
