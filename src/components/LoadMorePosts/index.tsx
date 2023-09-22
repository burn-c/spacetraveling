import styles from './loadMorePosts.module.scss';

export default function LoadMorePosts() {
  return (
    <button className={styles.buttonLoadMorePosts} type="button">
      Carregar mais posts
    </button>
  );
}
