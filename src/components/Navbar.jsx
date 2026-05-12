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
        <a href="https://drive.google.com/file/d/1OeGYhjR_SCD4kDH6yD-tySxr-C5BV1fw/view?usp=drivesdk" target="_blank" className="resume-btn">
          My Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;




