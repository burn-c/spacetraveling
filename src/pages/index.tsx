import LoadMorePosts from '../components/LoadMorePosts';
import Post from '../components/Post';
import { createClient } from '../prismicio';

import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div className={styles.postsContainer}>
      <section>
        {posts?.map(post => (
          <Post
            title={post?.data?.title}
            subtitle={post?.data?.subtitle}
            author={post?.data?.author}
            date={post?.first_publication_date}
            slug={post?.uid}
          />
        ))}

        <LoadMorePosts />
      </section>
    </div>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const posts = await client.getAllByType('posts');

  return {
    props: { posts },
  };
}
