import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import Fly from '../components/Fly.js';
import { FliesContext } from '../context/FliesContext';
import { useEffect, useContext } from 'react';

// initial request for all item data from database - runs at buildtime
export async function getStaticProps() {

  const res = await fetch('https://5juvutwp5d.execute-api.us-west-2.amazonaws.com/beta/flies');
  const data = await res.json();

  return {
    props: {
      allItemsData: data
    }
  }
}

export default function Home({ allItemsData }) {

  const { flies, setFlies } = useContext(FliesContext);


  useEffect(() => {
    if (flies.length < 1) {
      setFlies(allItemsData);
    }
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={utilStyles.subtitle}>
          <p className={utilStyles.listItem}>The hottest patterns guaranteed to put fish in your net!</p>
        </div>
        <div className={styles.selectionHeader}>
          <h2 className={utilStyles.headingLg}>Shop Our Selection Below</h2>
        </div>
        <div className={styles.grid}>
          {flies.map((fly) => (
            <Fly key={fly.id} {...fly} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
