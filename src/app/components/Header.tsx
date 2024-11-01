import styles from "./Header.module.css";

const Header = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.logo}>My Portfolio</h1>
      <ul className={styles.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
  </nav>
);

export default Header;
