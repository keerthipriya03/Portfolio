//  // function Navbar() {
// //   return <h2>Navbar</h2>;
// // }

//  // export default Navbar;

// function Navbar({ theme, setTheme }) {
//   return (
//     <nav className="navbar">
//       <h2>Portfolio</h2>

//       <ul>
//         <li><a href="#about">About</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//       <div className="nav-right">
//         <button
//           className="theme-btn"
//           onClick={() =>
//             setTheme(theme === "dark" ? "light" : "dark")
//           }
//         >
//           {theme === "dark" ? "☀️" : "🌙"}
//         </button>

//         <a href="/resume.pdf" target="_blank">Resume</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      {/* FIX 1: <N /> code-style logo instead of plain "Portfolio" text */}
      {/* <h2 className="logo">&lt;N /&gt;</h2> */}
      <h2>Portfolio</h2>

      {/* FIX 2: ul must be INSIDE nav-right so all right-side items flex together */}
      <div className="nav-right">
        <ul>
          <li><a href="#hero">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* FIX 3: resume-btn class so CSS styles it as a bordered button */}
        <a href="/resume.pdf" target="_blank" className="resume-btn">
          My Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;





// function Navbar({ theme, setTheme, ripple, setRipple }) {
//   return (
//     <nav>
//       <div className="nav-bar">
//         <ul>
//           <li><a href="#profile-img">Profile</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#skills">Skills</a></li>
//           <li><a href="#projectss">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </div>

//       <div className="nav-bar">
//         <ul>
//           <li>
//             <label className="switch">
//               <input
//                 type="checkbox"
//                 checked={ripple}
//                 onChange={() => setRipple(!ripple)}
//               />
//               <span className="slider"></span>
//             </label>
//           </li>

//           <li>
//             <button
//               id="theme-toggle"
//               onClick={() =>
//                 setTheme(theme === "dark" ? "light" : "dark")
//               }
//             ></button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;