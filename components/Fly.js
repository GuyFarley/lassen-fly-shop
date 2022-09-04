import Link from 'next/link';
import styles from '../components/layout.module.css';
import Image from 'next/image';

export default function Fly(item) {
  return (
    <section className={styles.card}>
      <Image src={item.imageUrl} alt="test image" layout="responsive" width="100vw" height="70vw" priority="true" />
      <div>
        <Link href={`/items/[id]`} as={`/items/${item.id}`}>{item.title}</Link> ({item.category})
        <br />
        <b>Inventory:</b> {item.inventory}
        <br />
        <b>Price:</b> ${item.price}
      </div>
    </section>
  )
}