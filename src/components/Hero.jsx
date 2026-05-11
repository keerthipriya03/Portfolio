import './page.css'
import profileImage from "../images/profile.webp";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        {/* FIX 4: Added the waving hand emoji like image 1 */}
        <h1>Hi , I am Keerthi Priya 👋</h1>

        <p>
          An aspiring full-stack developer with a passion
        for creating dynamic and user-friendly websites. I enjoy learning new
        technologies and building real-world projects.
        </p>

        {/* FIX 5: location wrapped in a div for icon + text alignment */}
        <div className="hero-location">
          <span>📍</span>
          <span>Visakhapatnam, India</span>
        </div>

        {/* FIX 6: social icons row (add your real hrefs) */}
        <div className="social-icons">
          <a href="https://github.com" target="https://github.com/keerthipriya03" rel="noreferrer" title="GitHub">
            {/* GitHub SVG — no external CDN needed */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
              -1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 
              3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
              0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 
              3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 
              2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 
              1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 
              2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 
              24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="https://linkedin.com/in/keerthi-priya-dwarampudi-094b302a1" rel="noreferrer" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
              0-2.136 1.445-2.136 2.939v5.667H9.987V9.756h3.12v1.561h.043c.434-.823 
              1.494-1.691 3.076-1.691 3.292 0 3.9 2.167 3.9 4.988v5.838zM5.337 
              8.194a1.81 1.81 0 1 1 0-3.62 1.81 1.81 0 0 1 0 3.62zm1.561 
              12.258H3.775V9.756h3.123v10.696zM22.225 0H1.771C.792 0 0 .774 
              0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 
              24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="https://twitter.com/keerthipriya03" rel="noreferrer" title="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 
              2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.929 4.929 0 0 
              0-8.391 4.491A13.978 13.978 0 0 1 1.64 3.162a4.928 4.928 0 0 
              0 1.525 6.573 4.9 4.9 0 0 1-2.23-.616v.061a4.93 4.93 0 0 0 
              3.95 4.829 4.936 4.936 0 0 1-2.224.084 4.93 4.93 0 0 0 4.6 
              3.42A9.878 9.878 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 
              0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.015-.637A10.012 10.012 
              0 0 0 24 4.59l-.047-.02z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
