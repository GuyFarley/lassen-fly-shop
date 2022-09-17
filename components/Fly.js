import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '../components/layout.module.css';
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
        <b>Price:</b> ${item.price}
        <br />
        <b>Inventory:</b> {item.inventory}
        <br />
      </div>
      <div className={styles.buttons}>
        <Button
          className={styles.addCartButton}
          size="small"
          variant="contained" onClick={() => handleAddToCart(item)}>
          {item.inCart < 1 ? (
            <>Add to Cart</>
          ) : (
            <>
              Add to Cart ({item.inCart})
            </>)}
        </Button >
        <Link
          href={`/items/[id]`}
          as={`/items/${item.id}`}
        >
          <Button className={styles.learnMoreButton} size="small"
            variant="contained">Learn More</Button>
        </Link>
      </div>
    </section>
  )
}