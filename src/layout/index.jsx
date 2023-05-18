import styles from "./styles.module.scss";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <div className={styles.innerContent}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
