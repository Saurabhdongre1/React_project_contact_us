import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={`${styles.navbar} container`}>
        <div className={`${styles.logo}`}>
            <img src="/images/copy-removebg-preview.png" alt="brand-logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
