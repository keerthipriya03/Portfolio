import './page.css'

function Projects() {
  return (
    <section className="projects">
      <h2>Projects I Have Done</h2>
      <p>Here’s a quick summary of my projects</p>

      <div className="project-item">
        <div className="project-content">
          <div className="project-image">
            <img src="/images/mynotestack.png" alt="MyNoteStack Screenshot" />
          </div>
          <div className="project-details">
            <h3>MyNoteStack</h3>
            <h4>Backend Application</h4>
            <p><em>Jan 2026</em></p>
            <ul>
              <li>MyNoteStack – A backend application for creating and managing notes using RESTful APIs.</li>
              <li>Tools Used: Node.js, Express.js, MongoDB, VSCode, GitHub</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-item">
        <div className="project-content">
          <div className="project-image">
            <img src="/images/movieverse.png" alt="MovieVerse Screenshot" />
          </div>
          <div className="project-details">
            <h3>MovieVerse</h3>
            <h4>React-based Movie Search Engine</h4>
            <p><em>Feb 2026</em></p>
            <ul>
              <li>MovieVerse – A React-based movie search engine that fetches and displays movie details using an external API.</li>
              <li>Tools Used: React.js, JavaScript, HTML, CSS, VSCode, GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;




// function Projects() {
//   return (
//     <section className="projects">
//       <h2>Projects I Have Done</h2>
//       <p>Here’s a quick summary of my projects</p>

//       <div className="project-item">
//         <h3>MyNoteStack</h3>
//         <h4>Backend Application</h4>
//         <p><em>Jan 2026</em></p>
//         <ul>
//           <li>MyNoteStack – A backend application for creating and managing notes using RESTful APIs.</li>
//           <li>Tools Used: Node.js, Express.js, MongoDB, VSCode, GitHub</li>
//         </ul>
//       </div>

//       <div className="project-item">
//         <h3>MovieVerse</h3>
//         <h4>React-based Movie Search Engine</h4>
//         <p><em>Feb 2026</em></p>
//         <ul>
//           <li>MovieVerse – A React-based movie search engine that fetches and displays movie details using an external API.</li>
//           <li>Tools Used: React.js, JavaScript, HTML, CSS, VSCode, GitHub</li>
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Projects;
