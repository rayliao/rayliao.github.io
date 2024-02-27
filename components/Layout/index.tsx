import styles from "./index.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  const now = new Date();
  return (
    <>
      <div className={styles.sidebar}>
        <h1 className={styles.title}>
          copyright© 2011-{now.getFullYear()} RAYLIAO
        </h1>
        <div className="menu">
          <div>
            <Link href="/shoot/2021">2021</Link>
          </div>
          <div>
            <Link href="/shoot/2020">2020</Link>
          </div>
          <div>
            <Link href="/shoot/2019">2019</Link>
          </div>
          <div>
            <Link href="/shoot/2018">2018</Link>
          </div>
          <div>
            <Link href="/shoot/2017">2017</Link>
          </div>
          <div>
            <Link href="/shoot/2016">2016</Link>
          </div>
          <div>
            <Link href="/shoot/undefined">undefined</Link>
          </div>
          <div>
            <Link href="/shoot/past">past</Link>
          </div>
        </div>
        <div className="nav">
          <div>
            <Link href="/">home</Link>
          </div>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default Layout;
