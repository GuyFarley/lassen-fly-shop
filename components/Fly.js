import Link from 'next/link';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import { FliesContext } from '../context/FliesContext';
import { useContext } from 'react';

export default function Fly(item) {

  const { addToCart } = useContext(FliesContext);

  function handleAddToCart(item) {
    addToCart(item);
  }

  return (
    <section className={styles.card}>
      <Image src={item.imageUrl} alt="test image" layout="responsive" width="100vw" height="70vw" priority="true" />
      <div className={styles.description}>

        {item.title}

        <br />
        <b>Inventory:</b> {item.inventory}
        <br />
        <b>Price:</b> ${item.price}
        <br />
      </div>
      <div className={styles.buttons}>
        <p className={utilStyles.button} onClick={() => handleAddToCart(item)}>{`Add to Cart (${item.inCart})`}</p>
        <Link
          href={`/items/[id]`}
          as={`/items/${item.id}`}
        >
          <p className={utilStyles.button}>Learn More</p>
        </Link>
      </div>
    </section>
  )
}