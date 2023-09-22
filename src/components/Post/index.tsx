import { FiCalendar, FiUser } from 'react-icons/fi';

import styles from './post.module.scss';

export default function Post({ title, description, date, author }) {
  return (
    <div className={styles.postContainer}>
      <h1>{title}</h1>
      <p>{description}</p>

      <div className={styles.infoContainer}>
        <div>
          <FiCalendar color="#BBBBBB" size="20px" /> {date}
        </div>

        <div>
          <FiUser color="#BBBBBB" size="20px" /> {author}
        </div>
      </div>
    </div>
  );
}
