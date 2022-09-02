import { itemList } from '../data';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import Fly from '../components/Fly.js';
import Image from 'next/image';

export async function getStaticProps() {

  const res = await fetch('https://5juvutwp5d.execute-api.us-west-2.amazonaws.com/beta/flies');
  const data = await res.json();
  console.log('res: ', res);
  return {
    props: {
      allItemsData: data
    }
  }
}

export default function Home({ allItemsData }) {
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
          {allItemsData.map((item) => (
            <Fly key={item.id} {...item} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
