import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import { FliesContext } from '../context/FliesContext';
import { useContext } from 'react';


export default function Cart() {

  const { cartFlies } = useContext(FliesContext);

  console.log(cartFlies);

  return (
    <Layout>
      <section className={styles.panel}>
        {cartFlies.length > 0 ? (
          cartFlies.map((fly) => (
            <p key={fly.id}>{fly.title}</p>
          ))
        ) : (
          <div className={styles.emptyCart}>
            <h2 className={utilStyles.emptyCartFont}>Your cart is empty</h2>
          </div>
        )}
      </section>
    </Layout>);
}