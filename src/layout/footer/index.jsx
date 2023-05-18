import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{new Date().getFullYear()}© Jiftify Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
