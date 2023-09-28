
import '../../src/index.css';
import '../../src/App.css';
import Header from './Home'
import CustomNavbar from './sideBar'
import Portfolio from './Portfolio'
import Services from './MyServices';
import Stack from './WhatIKnow';
import Contact from './Contact'
import Footer from './Footer'





function App() {
 
 
  return (
    <div className='inter'>
      <CustomNavbar />
      <Header />
      
      <Footer/>
      
    </div>
  )
}

export default App

