/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FiCalendar, FiUser } from 'react-icons/fi';

import styles from './post.module.scss';

export default function Post({ title, subtitle, date, author, slug }) {
  return (
    <div className={styles.postContainer}>
      <a href={`/post/${slug}`}>
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <div className={styles.infoContainer}>
          <div>
            <FiCalendar size="20px" /> {date}
          </div>

          <div>
            <FiUser size="20px" /> {author}
          </div>
        </div>
      </a>
    </div>
  );
}
