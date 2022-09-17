import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { FliesContext } from '../context/FliesContext';
import { useContext } from 'react';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

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
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cartQty} color="secondary" >
                    <ShoppingCartIcon fontSize="large" />
                  </StyledBadge>
                </IconButton>
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
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cartQty} color="secondary">
                    <ShoppingCartIcon fontSize="large" />
                  </StyledBadge>
                </IconButton>
              </Link>
            </div>
          </>
        )}
      </header>
      <main>
        <div className={styles.grid}>
          {children}
        </div>
      </main>
      <footer className={styles.footer}>
        {footer}
      </footer>
    </div >
  );
}