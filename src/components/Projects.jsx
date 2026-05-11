function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <img src="/project1.png" />

        <div>
          <h3>Movie Search App</h3>
          <p>React + API based project...</p>
        </div>
      </div>

      <div className="project-card reverse">
        <div>
          <h3>RentEase</h3>
          <p>Rental platform with OTP login...</p>
        </div>

        <img src="/project2.png" />
      </div>
    </section>
  );
}

export default Projects;









// function Projects() {
//   const projects = [
//     {
//       title: "Music",
//       link: "https://keerthipriya03.github.io/Music/",
//       img: "https://i.pinimg.com/originals/29/35/c4/2935c40ee59d0a7d1b5078325f62f271.jpg",
//       desc: "Music player interface"
//     },
//     {
//       title: "Product Card",
//       link: "https://keerthipriya03.github.io/Product-Card/",
//       img: "https://th.bing.com/th/id/OIP.jzLX1ilv1ftzZp9yde0AzgHaFj",
//       desc: "Responsive product card"
//     }
//   ];

//   return (
//     <section id="projectss">
//       <h2>PROJECTS</h2>

//       <div className="project">
//         {projects.map((p, i) => (
//           <div className="pro" key={i}>
//             <div className="main-img">
//               <img src={p.img} alt="project" />
//             </div>

//             <div className="details">
//               <h3>
//                 <a href={p.link} target="_blank">{p.title}</a>
//               </h3>
//               <p>{p.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;