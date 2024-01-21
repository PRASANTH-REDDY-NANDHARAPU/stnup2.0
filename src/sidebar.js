import { Link } from "react-router-dom"

const Sidebar=()=>{
    return<>
     <div className="w-20">
            <Link className="dash-items" to="/browse"><button className="dash-btn"><i class="bi bi-play-circle"></i> Recordings</button></Link>
            <Link className="dash-items" to="/browse/assignments"><button className="dash-btn"><i class="bi bi-pencil-square"></i> Assignments</button></Link>
            <Link className="dash-items" to="/browse/interview"><button className="dash-btn"><i class="bi bi-mortarboard"></i> Interview Guide</button></Link>
            <Link className="dash-items" to="/browse/resume"><button className="dash-btn"><i class="bi bi-journal-text"></i> Resume Templates</button></Link>
            <Link className="dash-items" to="/browse/payment"><button className="dash-btn"><i class="bi bi-currency-rupee"></i> Payment Invoice</button></Link>
     </div>
    </>
}

export default Sidebar