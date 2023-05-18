import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <a href="https://blog.jiftify.com">
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="logo" />
      </div>
    </a>
  );
};

export default Logo;
