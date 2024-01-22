import { useState } from "react";

const FeedBack = () => {
  const [show,setShow]=useState('dilogue-none')
  function ShowDilogue(){
  setShow((prevClass) =>
      prevClass === 'feed-add-form' ? 'dilogue-none' : 'feed-add-form'
  );
  }
  return (
    <div className="feedback">
      <div className="feed-flex">
        <div className="feed-item">
          <div className="feed-content">
            <p>
              Bursting with imagery, motion, interaction and distraction though
              it is, today’s World Wide Web is still primarily a conduit for
              textual information. In HTML5, the focus on writing and authorship
              is more pronounced than ever. It’s evident in the very way that
              new elements such as article and aside are named. HTML5 asks us to
              treat the HTML document more as… well, a document.
            </p>
          </div>
          <hr></hr>
          <div className="feed-bio">
            <img src="https://source.unsplash.com/1600x800/?girl face"></img>
            <div>
              <h3>prasanthreddy</h3>
              <p>
                <i class="bi bi-instagram"></i> prasanthreddy903
              </p>
            </div>
          </div>
        </div>
      </div>
      <div onClick={ShowDilogue} className="add-feedback">
        <i class="bi bi-plus-lg"></i>
      </div>
      <div className={show}>
         <h2>Share your experience</h2>
         <input type='text' placeholder="Enter name"></input>
         <input type='text' placeholder="Enter instagram id"></input>
         <textarea placeholder="Your experience with Stnup"></textarea>
         <p></p>
         <button>Submit</button>
      </div>
    </div>
  );
};
export default FeedBack;
