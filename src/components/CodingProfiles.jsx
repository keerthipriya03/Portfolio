import React from 'react'
// import {useTheme} from '../../themeContext'
import './page.css'
import { SiCodechef, SiLeetcode, SiGithub } from "react-icons/si"
function CodingProfiles() {
  return (
    <section className="codingprofile">
      <h2>My Coding Profiles</h2>

      <div className="profiles">
  <a href="https://www.codechef.com/users/keerthipriya3"><SiCodechef size={24} /></a>
  <a href="https://leetcode.com/u/keerthipriya3"><SiLeetcode size={24} /></a>
  <a href="https://github.com/keerthipriya03"><SiGithub size={24} /></a>
</div>
    </section>
    // <div className={`p-4 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
    //   <div className="flex justify-center items-center">
    //     <div className={`rounded-full w-44 h-10 md:h-12 flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
    //         <p className="text-center">Coding Profiles</p>
    //     </div>
    //   </div>
    //   <p className='text-center mt-4 text-lg'>Links to my coding profiles</p>
    //   <div className="flex items-center justify-center">
    //       <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-3xl">
    //         <div className="flex flex-col justify-center items-center">
    //             <a href='https://www.codechef.com/users/naga_lakshmi08' target='_blank'>
    //               <SiCodechef size={50} className='text-amber-800 hover:text-amber-950 cursor-pointer' />
    //             </a>
    //             <p>Code Chef</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center">
    //             <a href='https://leetcode.com/u/naga_lakshmi08/' target='_blank'>
    //               <SiLeetcode size={50} className='cursor-pointer text-yellow-400 hover:text-yellow-600' />
    //             </a>
    //             <p>Leetcode</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center">
    //             <a href='https://www.hackerrank.com/profile/naga_lakshmi08' target='_blank'>
    //               <SiHackerrank size={50} className={`cursor-pointer ${isDarkMode ? 'text-green-600 hover:text-green-700' : 'text-gray-900 hover:text-black'}`} />
    //             </a>
    //             <p>Hackerrank</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center">
    //             <a href='https://www.geeksforgeeks.org/user/lakshmireddydwarampudi436/' target='_blank'>
    //               <SiGeeksforgeeks size={50} className='cursor-pointer text-green-700 hover:text-green-900' />
    //             </a>
    //             <p>Geeks for Geeks</p>
    //         </div>
    //       </div>
    //   </div>
    // </div>
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