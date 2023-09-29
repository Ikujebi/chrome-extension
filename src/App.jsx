import { Routes, Route, Navigate  } from 'react-router-dom';
import Layout from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import ProtectedRoute from '../ProtectedRoutes';
import Features from './Pages/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer'
import YourVideoIsReady from './Pages/YourVideoIsReady'


const App = () => {
  return (
    <Routes >
      <Route path='/login' element={<SignIn/>} />
      <Route path='/' element={<Layout/>} />
     
      <Route path='/feature' element={<Features/>} />
      <Route path='/howItWorks' element={<HowItWorks/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/yourVideoIsReady' element={<YourVideoIsReady/>} />
      
    
    </Routes>
  )
}

export default App

