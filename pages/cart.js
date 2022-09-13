import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Image from 'next/image';
import { FliesContext } from '../context/FliesContext';
import { useContext } from 'react';


export default function Cart() {

  const { cartFlies } = useContext(FliesContext);

  console.log(cartFlies);

  return (
    <Layout>
      <section className={styles.panel}>
        {cartFlies.map((fly) => (
          <p key={fly.id}>{fly.title}</p>
        )
        )}
      </section>
    </Layout>);
}