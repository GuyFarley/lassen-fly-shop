
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Fly(item) {
  return (
    <li className={utilStyles.listItem}>
      <Link href={`/items/[id]`} as={`/items/${item.id}`}>{item.title}</Link>
      <br />
      {item.id}
      <br />
      {item.price}
      <br />
    </li>
  )
}

