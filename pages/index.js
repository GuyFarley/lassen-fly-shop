import { itemList } from '../data';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import Fly from '../components/Fly.js';
import Image from 'next/image';

export async function getStaticProps() {
  return {
    props: {
      allItemsData: itemList,
    },
  };
}

export default function Home({ allItemsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.subtitle}>The hottest patterns guaranteed to put fish in your net!</p>
        <div className={styles.current}>
          <h2 className={utilStyles.headingLg}>Current Items in Stock</h2>
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
