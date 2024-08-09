import "../css/mainpage.css";

function Header() {
  return (
    <header>
      <h1>Ruins of Alexandria</h1>

      <div id="links">
        <a href="https://github.com/Josephkim0703">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/josephkim0703">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/josephkim_/">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
