import Nav from "../components/CustomNavbar";
import Footer from "../components/Footer";
import edit from "../images/edit.png";
import copy from "../images/copy.png";
import facebook from "../images/Facebook svg (1).png";
import WhatsApp from "../images/Vector.png";
import Group from "../images/Group.png";
import video from "../images/video.png";
import close from "../images/close-circle.png";
import successKite from "../images/success-kite 1.png";
import { Link } from "react-router-dom";
import { Modal, Button } from 'antd';
import {useState} from 'react'

const YourVideoIsReady = () => {

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // Add logic for OK button if needed
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSaveVideo = () => {
    // Logic for saving video
    showModal();
  };


  return (
    <div className="sora">
      <Nav />
      <div>
      <div>
        <main className="flex justify-around">
          <section>
            <h1 className=" text-[1.3rem] font-semibold text-[#141414]">
              Your video is ready!
            </h1>
            <h2 className=" text-[.7rem]">Name</h2>
            <h2 className="flex text-[#413C6D] text-[.89rem]">
              Untitled_Video_20232509
              <img src={edit} alt="edit" className=" w-[1.2rem] h-[1.2rem]" />
            </h2>
            <div className=" text-[.8rem]">
              <div className="mt-3 flex bg-gray-300 p-1 gap-[1.5rem] rounded-md xl:w-full lg-w-full md-w-full w-[15rem]  ">
                <input
                  type="text"
                  placeholder="enter email of receiver"
                  className="bg-gray-300 rounded-md"
                  // value={inputValue}
                  // onChange={handleInputChange}
                  
                />
                <button className="text-[.9rem] bg-white rounded-md p-[.1rem]">
                  Send
                </button>
              </div>

              <div className="mt-3 flex bg-gray-300 p-1 gap-[1.5rem] rounded-md xl:w-full lg-w-full md-w-full w-[15rem] ">
                <input
                  type="text"
                  placeholder="https://www.helpmeout/Untitled_Video_20232509"
                  className="bg-gray-300 rounded-md xl:w-full lg-w-full md-w-full w-[9rem]"
                  // value={inputValue}
                  // onChange={handleInputChange}
                  
                />
                <button className=" flex bg-[#605C84] text-white rounded-md p-[.1rem]">
                <img src={copy} alt="copy" className=" pt-[.099rem] w-[1.1rem] h-[1.2rem]" />
                 <p className=" text-[.9rem]">Copy</p> 
                </button>
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
              </div>
            </div>
            
          </section>
          <section >
          <div>
          <img src={video} alt="copy" className=" pt-[.099rem] " />
          </div>
          <div>
          <h2>Transcript</h2>
          <p>
          English
          </p>
          
          <article className='flex gap-2 text-[.53rem]'>
          <p>0.01</p>
          <p className="font-bold">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
          
          </article>
          <article className='flex gap-2 text-[.53rem]'>
          <p>0.15</p>
          <p className="font-bold">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
          
          </article>
          <article className='flex gap-2 text-[.53rem]'>
          <p>0.30</p>
          <p className="font-bold">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the  </p>
          
          </article>
          
          </div>
          </section>
        </main>
        <aside className="mt-6 flex flex-col justify-center items-center">
        <h3>To ensure the availability and privacy of your video,</h3>
        <h3>we recommend saving it to your account.</h3>
        <button onClick={handleSaveVideo} className="mt-2 rounded-md bg-[#120B48] text-white">
        Save video
        </button>
        <Modal
        
        open={visible}
        onOk={handleOk}
        
      >
      <div className=" flex flex-col justify-center items-center">
      <section className="flex gap-1 ">
      <img src={successKite} alt="copy" className=" w-[10rem] h-[10rem] pt-[.099rem] " />
      <img src={close} onclick={handleCancel} alt="copy" className=" rounded-[20px]  pt-[1.7rem] w-[1.6rem] border-[2px] h-[.7rem]" />
      </section>
      <section>
      <div className=" font-bold flex flex-col items-center">
      <p>Your video link has been sent </p>
      <p>to johnmark@gmail.com</p>
      </div>
      <div className=" text-[.7rem] flex flex-col items-center">
      <p>Would you need to view this video later?  </p>
      <p>Save to your account now!</p>
      <button onClick={handleOk} className="rounded-lg p-1 text-white flex items-center justify-center bg-[#120B48]">Save video</button>
      </div>
      <div className=" text-[.7rem] flex flex-col items-center">
      <p>Your video link has been sent </p>
      <p>to johnmark@gmail.com</p>
      </div>
</section>
</div>
      </Modal>
        <div className="flex text-[.7rem] mt-7">
        <p>Don't have an account?</p>
        <Link to={"/login"} >
       <p className=" font-bold"> Create An account</p>
        </Link>
        </div>
        </aside>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default YourVideoIsReady;
