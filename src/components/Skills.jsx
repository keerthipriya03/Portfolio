function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Python"];

  return (
    <section id="skills">
      <h2 style={{ textAlign: "center" }}>Skills</h2>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-card">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;









// function Skills() {
//   const skills = [
//     { name: "HTML", img: "/html.png" },
//     { name: "CSS", img: "/css.png" },
//     { name: "C Language", img: "/c.png" },
//     { name: "Java", img: "/java.png" },
//     { name: "Python", img: "/python.png" }
//   ];

//   return (
//     <section id="skills">
//       <h2>My Skills</h2>

//       <div className="tables">
//         {skills.map((skill, index) => (
//           <div className="image-text-item" key={index}>
//             <img src={skill.img} alt={skill.name} className="image_skills" />
//             <p>{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;