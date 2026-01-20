import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="site-header">
      <img
        src={logo}
        alt="Pixell River Financial Logo"
        className="logo"
      />

      <div className="header-text">
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the official staff directory</p>
      </div>
    </header>
  );
}

export default Header;
