
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from '../components/layout.module.css';

export default function Fly(item) {
  return (
    <div className={styles.card}>
      <Link href={`/items/[id]`} as={`/items/${item.id}`}>{item.title}</Link>
      <br />
      {item.id}
      <br />
      {item.price}
      <br />
    </div>
  )
}