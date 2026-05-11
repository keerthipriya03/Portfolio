import './page.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section id="skills">
      <h2 style={{ textAlign: "center" }}>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card"><FaHtml5 size={24}/> HTML</div>
        <div className="skill-card"><FaCss3Alt size={24}/> CSS</div>
        <div className="skill-card"><FaJs size={24}/> JavaScript</div>
        <div className="skill-card"><FaReact size={24}/> ReactJS</div>
        <div className="skill-card"><FaBootstrap size={24}/> Bootstrap</div>
        <div className="skill-card"><SiMysql size={24}/> MySQL</div>
        <div className="skill-card"><FaNodeJs size={24}/> Node.js</div>
        <div className="skill-card"><FaGitAlt size={24}/> Git</div>
        <div className="skill-card"><FaPython size={24}/> Python</div>
      </div>
    </section>
  );
}

export default Skills;
