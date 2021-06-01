import { Navigate, Outlet } from 'react-router-dom';
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
import UpdatePost from './pages/UpdatePost';
import UpdateUser from './pages/UpdateUser';
import MyPosts from './pages/MyPosts';
import Article from './pages/Article';
import AddCategory from './pages/AddCategory';
import CategoryList from './pages/CategoryList';
import UpdateCategory from './pages/UpdateCategory';

const routes = (validToken, user) => [

  // Private Routes
  {
    path: 'app',
    element: validToken ? <DashboardLayout /> : <Navigate to="/user/login" />,
    children: [
      { path: 'account', element: <Account /> },
      {
        path: 'admin',
        element: (validToken && user.roleName !== 'USER') ? <Outlet /> : <Navigate to="/home" />,
        children: [
          { path: 'posts/myPosts', element: <MyPosts /> },
          { path: 'posts/addPost', element: <AddPost /> },
          { path: 'posts/updatePost/:id', element: <UpdatePost /> },
          { path: '/', element: <Navigate to="/app/admin/posts/myPosts" /> },
        ]
      },
      {
        path: 'manage',
        element: (validToken && user.roleName === 'SUPER_ADMIN') ? <Outlet /> : <Navigate to="/home" />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'users', element: <UserList />, },
          { path: 'posts', element: <PostList /> },
          { path: 'categories', element: <CategoryList /> },
          { path: 'users/adduser', element: <AddUser /> },
          { path: 'users/updateUser/:id', element: <UpdateUser /> },
          { path: 'categories/addCategory', element: <AddCategory /> },
          { path: 'categories/updateCategory/:id', element: <UpdateCategory /> },
          { path: '/', element: <Navigate to="/app/manage/dashboard" /> },
        ]
      },
      { path: '/', element: <Navigate to="/home" /> },
      // { path: '*', element: <Navigate to="/404" /> }
    ]
  },

  // Public Routes
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
      { path: 'article/:id', element: <Article /> },
      { path: 'categories/:name', element: <Category /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/home" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
