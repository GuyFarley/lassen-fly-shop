import { itemList } from '../../data';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../components/layout.module.css';
import Layout from '../../components/layout';
import Image from 'next/image';

export async function getStaticProps({ params }) {
  const flies = itemList.filter(fly => fly.id.toString() === params.id);
  return {
    props: {
      fly: flies[0],
    },
  }
}

export async function getStaticPaths() {
  const paths = itemList.map(fly => ({
    params: { id: fly.id.toString() },
  }))
  return { paths, fallback: false }
}

export default function itemPage({ fly }) {
  return (
    <Layout>
      <section className={styles.panel}>
        <Image src={fly.imageUrl} alt="test image" layout="responsive" width="100vw" height="70vw" priority="true" />
        <h2 className={utilStyles.headingLg}>{fly.title}</h2>
        <p>{fly.description}</p>
        <p>{fly.inventory}qty in stock!</p>
        <p>Price: {fly.price}/each</p>

      </section>
    </Layout>
  )
}

