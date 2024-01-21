import { Link, Outlet } from "react-router-dom";
import DashNav from "./dashNav";
import Sidebar from "./sidebar";
const Browse = () => {
  return (
    <>
      <DashNav />
      <div className="private-dashboard">
        <Sidebar />
        <Outlet />
      </div>
      <div className="bottom">
        <Link className="mb-btm-items" to="/browse">
          <div className="mb-ico-items">
            <i class="bi bi-play-circle"></i>
            <p>Videos</p>
          </div>
        </Link>
        <Link className="mb-btm-items" to="/browse/assignments">
          <div className="mb-ico-items">
            <i class="bi bi-pencil-square"></i>
            <p>Tasks</p>
          </div>
        </Link>
        <Link className="mb-btm-items" to="/browse/resume">
          <div className="mb-ico-items">
            <i class="bi bi-mortarboard"></i>
            <p>Resume</p>
          </div>
        </Link>
        <Link className="mb-btm-items" to="/browse/interview">
          <div className="mb-ico-items">
            <i class="bi bi-journal-text"></i>
            <p>Interview</p>
          </div>
        </Link>
        <Link className="mb-btm-items" to="/browse/payment">
          <div className="mb-ico-items">
            <i class="bi bi-currency-rupee"></i>
            <p>Money</p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Browse;
