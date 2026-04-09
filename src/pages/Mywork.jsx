// import '../css/Mywork.css'
// const Mywork = () => {
//   return (
//     <div portfolio>
//       <div className="contaiener">
//         <h1 className='sub-title'>My Work</h1>
//         <div className="work-list">
//          <p></p>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Mywork 

import React from 'react'
import '../css/Mywork.css'
// Import your images here
import work1 from '../css/image-sign.jpeg' 
import work2 from '../css/calcu.jpeg'
import work3 from '../css/movie.jpeg'
import { FaExternalLinkAlt } from "react-icons/fa";

const Mywork = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={work1} alt="Social Media App" />
            <div className="layer">
              <h3>Sign/Login page UI</h3>
              <p>A sign up interface,The bold “Sign Up” button stands out for easy action, while the “Sign in” link provides quick access for returning users.</p>
              <a href="https://israelshittu430-web.github.io/Login-page/"><FaExternalLinkAlt /></a>
            </div>
          </div>
          <div className="work">
            <img src={work2} alt="Music App" />
            <div className="layer">
              <h3>Discount Calculator</h3>
              <p>This discount calculator helps to solve real life problems, input the bill amount and discount percentage appears, then instantly calculate the discounted value and total payable amount.</p>
              <a href=" https://israelshittu430-web.github.io/Calculator/"><FaExternalLinkAlt /></a>
            </div>
          </div>
          <div className="work">
            <img src={work3} alt="Online Shopping App" />
            <div className="layer">
              <h3>Movie Search App</h3>
              <p>This is a movie Search App, Search result are displayed with a movie posters movies can't be watched only browsing and exploring movies efficiently. </p>
              <a href="https://movieappweb1.netlify.app"><FaExternalLinkAlt /></a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Mywork

