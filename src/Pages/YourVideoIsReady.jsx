import Nav from '../components/CustomNavbar'
import Footer from '../components/Footer'
import edit from '../images/edit.png'

const YourVideoIsReady = () => {
  return (
    <div className='sora'>
<Nav/>
<div>
    <main>
        <section>
            <h1>
            Your video is ready!
            </h1>
            <h2>
            Name  
            </h2>
            <h2 className='flex'>
            Untitled_Video_20232509 
            <img src={edit} alt="edit" className=' w-[1.2rem] h-[1.2rem]'/>
            </h2>
        </section>
        <section></section>
    </main>
    <aside></aside>
</div>
<Footer/>
    </div>
  )
}

export default YourVideoIsReady