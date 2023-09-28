import { Routes, Route, Navigate  } from 'react-router-dom';
import Layout from 'antd/es/layout/layout';
import CustomNavbar from './components/CustomNavbar';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './Pages/SignIn';
import ProtectedRoute from '../ProtectedRoutes';

const App = () => {
  return (
    <Routes >
      <Route path='/dashboard' element={<Layout/>} />
      <Route path='/' element={<SignIn/>} />
    
    </Routes>
  )
}

export default App

