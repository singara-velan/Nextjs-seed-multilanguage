import styles from './NavBar.module.scss'

import useLocale from '../../hooks/useLocale';

const NavBar = ({lang, setLang}) => {

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    if(selectedLang !== lang) {
      setLang(event.target.value);
    }
  };

  const { content } = useLocale(lang);

  return (
    <header>
      <nav
        className={`navbar navbar-expand fixed-top navbar-light bg-white ${styles.navbarShadow}`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://place-hold.it/120x45" alt="Logo"></img>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${styles.menulink} ${styles.active}`}
                href="#"
              >
                { content?.menu?.Home }
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu 3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu 4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu 5
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown d-inline-flex mr-2">
              <select value={lang} className={styles.langSelect} onChange={handleChange}>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="kannada">Kannada</option>
              </select>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-info" type="button">
                Login/Signup
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
