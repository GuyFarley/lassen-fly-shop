import { itemList } from '../../data';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../components/layout.module.css';

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

export default ({ fly }) => (
  <>
    <div className={styles.container}>
      <p className={utilStyles.headingXl}>{fly.title}</p>
    </div>
  </>
)
