import styles from './NavBar.module.scss'

import useLocale from '../../hooks/useLocale';
import { useRouter } from 'next/router';

const NavBar = () => {

  const router = useRouter();
  const locale = router.locale;

  const handleChange = (event) => {
    const selectedLocale = event.target.value;
    if(selectedLocale !== locale) {
      router.push('/home','/home', { locale: selectedLocale });
    }
  };

  const { content } = useLocale(locale);

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
              <select value={locale} className={styles.langSelect} onChange={handleChange}>
                <option value="en-IN">English</option>
                <option value="hi-IN">Hindi</option>
                <option value="kn-IN">Kannada</option>
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
