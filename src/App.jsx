import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

useEffect(() => {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);



  // apply theme globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Skills />
      <CodingProfiles />
      <Experience />
      <Projects />
      <Contact />

      {/* <Footer /> */}
      {/* <BackToTop /> */}
    </>
  );
}

export default App;









// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import CodingProfiles from "./components/CodingProfiles";
// import "./App.css";


// function App() {
//   return (
//     <>
//       <Navbar />
//       <Header />
//       <About /> 
//       <Skills />
//       <CodingProfiles />
//       <Projects />
//       <Contact />
//     </>
//   );
// }
// export default App;

// // function App() {
// //   const [theme, setTheme] = useState("light");
// //   const [ripple, setRipple] = useState(true);

// //   // Load saved theme
// //   useEffect(() => {
// //     const savedTheme = localStorage.getItem("theme");
// //     if (savedTheme) setTheme(savedTheme);
// //   }, []);

// //   // Apply theme
// //   useEffect(() => {
// //     document.body.setAttribute("data-theme", theme);
// //     localStorage.setItem("theme", theme);
// //   }, [theme]);

// //   // Ripple effect
// //   useEffect(() => {
// //     const handleMove = (e) => {
// //       if (!ripple) return;

// //       const rippleEl = document.createElement("div");
// //       rippleEl.className = "cursor-ripple";
// //       rippleEl.style.left = `${e.pageX}px`;
// //       rippleEl.style.top = `${e.pageY}px`;

// //       document.body.appendChild(rippleEl);

// //       setTimeout(() => rippleEl.remove(), 600);
// //     };

// //     document.addEventListener("mousemove", handleMove);
// //     return () => document.removeEventListener("mousemove", handleMove);
// //   }, [ripple]);

// //   return (
// //     <div className="box">
// //       <h1>MY PORTFOLIO</h1>

// //       <Navbar
// //         theme={theme}
// //         setTheme={setTheme}
// //         ripple={ripple}
// //         setRipple={setRipple}
// //       />

// //       <Header />
// //       <About />
// //       <Skills />
// //       <Projects />
// //       <Contact />

// //       <footer>
// //         <div className="foot-panel4">
// //           <div>@2025 | Coded by Keerthi Priya</div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;













// // // // import { useState } from 'react'
// // // // import reactLogo from './assets/react.svg'
// // // // import viteLogo from './assets/vite.svg'
// // // // import heroImg from './assets/hero.png'
// // // // import './App.css'

// // // // function App() {
// // // //   const [count, setCount] = useState(0)

// // // //   return (
// // // //     <>
// // // //       <section id="center">
// // // //         <div className="hero">
// // // //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// // // //           <img src={reactLogo} className="framework" alt="React logo" />
// // // //           <img src={viteLogo} className="vite" alt="Vite logo" />
// // // //         </div>
// // // //         <div>
// // // //           <h1>Get started</h1>
// // // //           <p>
// // // //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// // // //           </p>
// // // //         </div>
// // // //         <button
// // // //           type="button"
// // // //           className="counter"
// // // //           onClick={() => setCount((count) => count + 1)}
// // // //         >
// // // //           Count is {count}
// // // //         </button>
// // // //       </section>

// // // //       <div className="ticks"></div>

// // // //       <section id="next-steps">
// // // //         <div id="docs">
// // // //           <svg className="icon" role="presentation" aria-hidden="true">
// // // //             <use href="/icons.svg#documentation-icon"></use>
// // // //           </svg>
// // // //           <h2>Documentation</h2>
// // // //           <p>Your questions, answered</p>
// // // //           <ul>
// // // //             <li>
// // // //               <a href="https://vite.dev/" target="_blank">
// // // //                 <img className="logo" src={viteLogo} alt="" />
// // // //                 Explore Vite
// // // //               </a>
// // // //             </li>
// // // //             <li>
// // // //               <a href="https://react.dev/" target="_blank">
// // // //                 <img className="button-icon" src={reactLogo} alt="" />
// // // //                 Learn more
// // // //               </a>
// // // //             </li>
// // // //           </ul>
// // // //         </div>
// // // //         <div id="social">
// // // //           <svg className="icon" role="presentation" aria-hidden="true">
// // // //             <use href="/icons.svg#social-icon"></use>
// // // //           </svg>
// // // //           <h2>Connect with us</h2>
// // // //           <p>Join the Vite community</p>
// // // //           <ul>
// // // //             <li>
// // // //               <a href="https://github.com/vitejs/vite" target="_blank">
// // // //                 <svg
// // // //                   className="button-icon"
// // // //                   role="presentation"
// // // //                   aria-hidden="true"
// // // //                 >
// // // //                   <use href="/icons.svg#github-icon"></use>
// // // //                 </svg>
// // // //                 GitHub
// // // //               </a>
// // // //             </li>
// // // //             <li>
// // // //               <a href="https://chat.vite.dev/" target="_blank">
// // // //                 <svg
// // // //                   className="button-icon"
// // // //                   role="presentation"
// // // //                   aria-hidden="true"
// // // //                 >
// // // //                   <use href="/icons.svg#discord-icon"></use>
// // // //                 </svg>
// // // //                 Discord
// // // //               </a>
// // // //             </li>
// // // //             <li>
// // // //               <a href="https://x.com/vite_js" target="_blank">
// // // //                 <svg
// // // //                   className="button-icon"
// // // //                   role="presentation"
// // // //                   aria-hidden="true"
// // // //                 >
// // // //                   <use href="/icons.svg#x-icon"></use>
// // // //                 </svg>
// // // //                 X.com
// // // //               </a>
// // // //             </li>
// // // //             <li>
// // // //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// // // //                 <svg
// // // //                   className="button-icon"
// // // //                   role="presentation"
// // // //                   aria-hidden="true"
// // // //                 >
// // // //                   <use href="/icons.svg#bluesky-icon"></use>
// // // //                 </svg>
// // // //                 Bluesky
// // // //               </a>
// // // //             </li>
// // // //           </ul>
// // // //         </div>
// // // //       </section>

// // // //       <div className="ticks"></div>
// // // //       <section id="spacer"></section>
// // // //     </>
// // // //   )
// // // // }

// // // // export default App
