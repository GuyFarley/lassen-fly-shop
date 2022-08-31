
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from '../components/layout.module.css';
import Image from 'next/image';

export default function Fly(item) {
  return (
    <section className={styles.card}>
      <Image src="/copper_john.jpg" alt="test image" layout="responsive" width="100vw" height="70vw" />
      <div>

        <Link href={`/items/[id]`} as={`/items/${item.id}`}>{item.title}</Link>
        <br />
        {item.id}
        <br />
        {item.price}
        <br />
      </div>
    </section>
  )
}