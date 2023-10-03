import ProfileNav from '../components/ProfileNav'
import edit from '../images/edit.png'
import copy from '../images/copy (1).png'
import vid2 from "../images/video frame.png";
import facebook from "../images/Facebook svg (1).png";
import WhatsApp from "../images/Vector.png";
import Group from "../images/Group.png";
import { Select } from 'antd';
import { useState } from 'react';


const { Option } = Select;


const VideoRepo = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('english');

  function handleChange(value) {
    setSelectedLanguage(value);
  }
const transcripts = {
  english:"First step. Open Facebook on your desktop or mobile device and locate 'Marketplace' in the left-hand menu or at the top of the",
  french:"Première étape. Ouvrez Facebook sur votre ordinateur de bureau ou votre appareil mobile et localisez 'Marketplace' dans le menu de gauche ou en haut de l'écran.",
  spanish:"Primer paso. Abre Facebook en tu computadora de escritorio o dispositivo móvil y localiza 'Marketplace' en el menú de la izquierda o en la parte superior de la pantalla."
}

const selectedTranscript = transcripts[selectedLanguage];
  return (
    <div>
    <ProfileNav/>
      <div>
      <header className='flex gap-1 text-[.6rem]'>
      <p>Home / </p>
      <p> Recent Videos / </p>
      <p> How To Create A Facebook Ad Listing </p>
      </header>
      <div className=' flex gap-1'>
        <h2 className='text-[.8rem] font-bold'>How To Create A Facebook Ad Listing</h2>
        <img
                  src={edit}
                  alt="profileImg"
                  className="w-[1rem] h-[1.1rem] pt-1"
                />
        </div>
        <div>
        <img
                  src={vid2}
                  alt="profileImg"
                  className=" pt-1"
                />
        </div>
        <div className=' flex justify-between'>
        <div className=' flex border-[1px]'>
        <input/>
        <button className=' flex bg-[#605C84] text-white pr-2'>Send</button>
        </div>
        <div className=' flex border-[1px]'>
        <input/>
        <button className=' flex pr-2'>
        <img
        src={vid2}
        alt="profileImg"
        className=" pt-1 w-[1rem] h-[1.1rem]"
      />
        <p>Copy URL</p>
        </button>
        </div>
        </div>
        <div className=" my-[3rem]">
        <h2>Share your video </h2>
        <div className="flex mt-[1rem] gap-3">
        <button className=" flex border-[1px] border-[#0A0628] bg-white text-[#08051E] rounded-md p-[.1rem]">
          <img src={facebook} alt="copy" className=" pt-[.099rem] w-[1.1rem] h-[1.2rem]" />
           <p className="  xl:text-[.8rem] lg:text-[.8rem] md:text-[.8rem] text-[.6rem]">Facebook</p> 
          </button>
          <button className=" flex border-[1px] border-[#0A0628] bg-white text-[#08051E] rounded-md p-[.1rem]">
          <img src={WhatsApp} alt="copy" className=" pt-[.099rem] w-[1.1rem] h-[1.2rem]" />
           <p className="  xl:text-[.8rem] lg:text-[.8rem] md:text-[.8rem] text-[.6rem]">WhatsApp</p> 
          </button>
          <button className=" flex border-[1px] border-[#0A0628] bg-white text-[#08051E] rounded-md p-[.1rem]">
          <img src={Group} alt="copy" className=" pt-[.099rem] w-[1.1rem] h-[1.2rem]" />
           <p className=" xl:text-[.8rem] lg:text-[.8rem] md:text-[.8rem] text-[.6rem]">Telegram</p> 
          </button>
          </div>
          <div>
          <h2>Transcript</h2>
          <Select 
          defaultValue="English" 
          style={{ width: 120 }} 
          onChange={handleChange}
          dropdownStyle={{ borderColor: '#ccc' }}  // Set the border color for the dropdown
          className="custom-select h-[1.7rem] w-[6rem]" >
      <Option value="english">English</Option>
      <Option value="french" >French</Option>
      <Option value="spanish">Spanish</Option>
    </Select>
          
          <article className='flex gap-2 text-[.55rem]'>
          <p>0.01</p>
          <p className="font-bold">{selectedTranscript}</p>
          
          </article>
          <article className='flex gap-2 text-[.55rem]'>
          <p>0.15</p>
          <p className="font-bold">{selectedTranscript}</p>
          
          </article>
          <article className='flex gap-2 text-[.55rem]'>
          <p>0.30</p>
          <p className="font-bold">{selectedTranscript}</p>
          
          </article>
          
          </div>
        </div>
      </div>
         
    </div>
  )
}

export default VideoRepo
