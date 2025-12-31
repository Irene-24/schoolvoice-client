import '../styles/Nav.scss';

const Nav = () => {
  return (
    <nav className="app-nav">
      <a href="/" className="app-nav-logo">
        <img src="/logo.svg" alt="SchoolVoice logo" />
        <span>SchoolVoice</span>
      </a>
    </nav>
  );
};

export default Nav;
