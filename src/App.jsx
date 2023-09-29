import { Routes, Route, Navigate  } from 'react-router-dom';
import Layout from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import ProtectedRoute from '../ProtectedRoutes';
import Features from './Pages/Features';

const App = () => {
  return (
    <Routes >
      <Route path='/' element={<SignIn/>} />
      <Route path='/dashboard' element={<Layout/>} />
     
      <Route path='/feature' element={<Features/>} />
      
    
    </Routes>
  )
}

export default App

