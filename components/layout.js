import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FliesContext } from '../context/FliesContext';
import { useContext } from 'react';

const title = 'Lassen\'s Fly Shop';
export const siteTitle = 'Lassen\'s Fly Shop';
const footer = "© Guy Farley 2022";

export default function Layout({ children, home }) {

  const { cartQty } = useContext(FliesContext);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Lassen\'s Fly Shop"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.title}>
              <h1 className={utilStyles.heading2Xl}>{title}</h1>
            </div>
            <div className={styles.cart}>
              <Link href="/cart">
                <p className={utilStyles.headingMd}>
                  {`Cart (${cartQty})`}
                </p>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={styles.title}>
              <h1 className={utilStyles.heading2Xl}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{title}</a>
                </Link>
              </h1>
            </div>
            <div className={styles.cart}>
              <Link href="/cart">
                <p className={utilStyles.headingMd}>
                  {`Cart (${cartQty})`}
                </p>
              </Link>
            </div>
          </>
        )}
      </header>
      <main>
        <div className={styles.grid}>
          {children}
        </div>
        {!home && <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </div>}
      </main>
      <footer className={styles.footer}>
        {footer}
      </footer>
    </div >
  );
}