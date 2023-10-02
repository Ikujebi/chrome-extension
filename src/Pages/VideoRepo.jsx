import ProfileNav from '../components/ProfileNav'
import edit from '../images/edit.png'
import copy from '../images/copy (1).png'
import vid2 from "../images/video frame.png";

const VideoRepo = () => {
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
      </div>
    </div>
  )
}

export default VideoRepo
