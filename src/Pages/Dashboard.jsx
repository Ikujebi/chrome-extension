import Header from '../components/Header'
import CustomNavbar from '../components/CustomNavbar'
import Footer from '../components/Footer'
import Features from './Features'
import HowItWorks from '../components/HowItWorks'







function Dashboard() {
 
 
  return (
    <div className='inter bg-gray-200 text-[#141414]'>
      <CustomNavbar />
      <Header />
      <Features />
      <HowItWorks />
      <Footer/>
      
      
    </div>
  )
}

export default Dashboard