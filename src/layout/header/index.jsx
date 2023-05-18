import styles from "./styles.module.scss";
import Logo from "@/common/components/logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.cont}>
        <Logo />
        <nav>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/jiftify_official"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100090291764228"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/facebook.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jiftifyOfficial"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/twitter.svg" alt="twitter" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
