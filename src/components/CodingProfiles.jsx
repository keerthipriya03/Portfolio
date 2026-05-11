function CodingProfiles() {
  return (
    <section className="codingprofile">
      <h2>My Coding Profiles</h2>

      <div className="profiles">
        <a href="https://www.codechef.com/users/keerthipriya3">CodeChef</a>
        <a href="https://leetcode.com/u/keerthipriya3">LeetCode</a>
        <a href="https://github.com/keerthipriya03">GitHub</a>
      </div>
    </section>
  );
}

export default CodingProfiles;









// function CodingProfiles() {
//   const profiles = [
//     {
//       name: "CodeChef",
//       link: "https://codechef.com",
//       img: "/codechef.png"
//     },
//     {
//       name: "LeetCode",
//       link: "https://leetcode.com",
//       img: "/leetcode.png"
//     }
//   ];

//   return (
//     <section id="profilecod">
//       <h2>My Coding Profiles</h2>

//       <div className="tables">
//         {profiles.map((p, index) => (
//           <div className="image-text-item" key={index}>
//             <a href={p.link} target="_blank" rel="noreferrer">
//               <img src={p.img} className="image_skills" alt={p.name} />
//             </a>
//             <p>{p.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CodingProfiles;