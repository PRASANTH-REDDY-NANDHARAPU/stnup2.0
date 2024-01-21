
import { Outlet, useNavigate } from "react-router-dom";
import DashNav from "./dashNav";
import Recordings from "./recordings";
import Sidebar from "./sidebar";
const Browse = () => {
  const navigate=useNavigate()
  return <>
   <DashNav/>
   <div className="private-dashboard">
       <Sidebar/>
       {/* <Recordings/> */}
       <Outlet/>
   </div>
    <div className="bottom">
      <div onClick={()=>{
        navigate('/browse')
      }} className="mb-ico-items">
          <i class="bi bi-play-circle"></i>
          <p>Videos</p>
      </div>
      <div onClick={()=>{
        navigate('/browse/assignments')
      }} className="mb-ico-items">
      <i class="bi bi-pencil-square"></i>
      <p>Tasks</p>

      </div>
      <div onClick={()=>{
        navigate('/browse/resume')
      }} className="mb-ico-items">
      <i class="bi bi-mortarboard"></i>
      <p>Resume</p>
      </div>
      <div onClick={()=>{
        navigate('/browse/interview')
      }} className="mb-ico-items">
      <i class="bi bi-journal-text"></i>
      <p>Interview</p>
      </div>
      <div onClick={()=>{
        navigate('/browse/payment')
      }} className="mb-ico-items">
      <i class="bi bi-currency-rupee"></i>
      <p>Money</p>
      </div>
    </div> 
  </>

 
};
export default Browse;
