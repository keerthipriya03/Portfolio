import './page.css'
// import { default as cropfit , default as movieverse , default as notestk , default as swapnsave} from "../images";
import cropfit from "../images/cropfit.png";
import movieverse from "../images/movieverse.png";
import notestk from "../images/notestk.png";
import swapnsave from "../images/swapnsave.png";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects I Have Done</h2>
      <p>Here’s a quick summary of my projects</p>

      <div className="project-item">
        <div className="project-content">
          {/* Left side image */}
          <div className="project-image">
            <img src={notestk} alt="MyNoteStack" />
          </div>

          {/* Right side details */}
          <div className="project-details">
            <h3>
              <a 
                href="https://journal-app-frontend-y90k.onrender.com/" 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: "inherit", textDecoration: "none" }}
              >
                MyNoteStack
              </a>
            </h3>
            <h4>Backend Note-Taking Application</h4>
            <p>
              MyNoteStack – A backend application for creating and managing notes using RESTful APIs.
            </p>

            {/* Tech stack as badges/buttons */}
            <div className="tech-stack">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express.js</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">VSCode</span>
              <span className="tech-badge">GitHub</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="project-item">
        <div className="project-content">

          {/* Left side  */}
          <div className="project-details">
            <h3>
              <a 
                href="https://swapnsave-frontend.onrender.com/" 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: "inherit", textDecoration: "none" }}
              >
                SwapnSave
              </a>
            </h3>
            {/* <h4>One-Stop Platform for Buying, Selling, and Exchanging Coupons</h4> */}
            <p>
              SwapnSave – It is one-stop platform to buy, sell, or exchange coupons with ease.
            </p>

            {/* Tech stack as badges/buttons */}
            <div className="tech-stack">
              <span className="tech-badge">React.js</span>
              <span className="tech-badge">Express.js</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">VSCode</span>
              <span className="tech-badge">GitHub</span>
            </div>
          </div>
          {/* right side */}
          <div className="project-image">
            <img src={swapnsave} alt="SwapnSave" />
          </div>
        </div>
      </div>     

      <div className="project-item">
        <div className="project-content">
          {/* Left side image */}
          <div className="project-image">
            <img src={movieverse} alt="MovieVerse" />
          </div>

          {/* Right side details */}
          <div className="project-details">
            <h3>
              <a 
                href="https://movieverse-2lgh.onrender.com/" 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: "inherit", textDecoration: "none" }}
              >
                MovieVerse
              </a>
            </h3>
            <h4>React-based Movie Search Engine</h4>
            <p>
              MovieVerse – A React-based movie search engine that fetches and displays movie details using an external API.
            </p>

            {/* Tech stack as badges/buttons */}
            <div className="tech-stack">
              <span className="tech-badge">React.js</span>
              <span className="tech-badge">Omdb API</span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-item">
        <div className="project-content">
          {/* Left side  */}

          <div className="project-details">
            <h3>
              <a 
                href="https://crop-fit.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Crop-Fit
              </a>
            </h3>
            <h4>Crop Recommendation App</h4>
            <p>
              Crop-Fit – A web application that recommends crops based on soil and weather conditions.
            </p>

            {/* Tech stack as badges/buttons */}
            <div className="tech-stack"> HTML, CSS, JavaScript, TensorFlow.js, Machine Learning, Image Processing, JSON
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">TensorFlow.js</span>
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">Image Processing</span>
              <span className="tech-badge">JSON</span>
            </div>
          </div>
          {/* Right side */}
          <div className="project-image">
            <img src={cropfit} alt="Crop-Fit" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;


