import { GetStaticProps } from 'next';

import { SliceZone } from '@prismicio/react';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

// export default function Home() {
//   // TODO

//   return <h1>Teste</h1>;
// }

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };

import { createClient } from '../../prismicio';
import { components } from '../../slices';

// interface Post {
//   uid?: string;
//   first_publication_date: string | null;
//   data: {
//     title: string;
//     subtitle: string;
//     author: string;
//   };
// }

// interface PostPagination {
//   next_page: string;
//   results: Post[];
// }

// interface HomeProps {
//   postsPagination: PostPagination;
// }

const Home = ({ page, navigation, settings }) => {
  // return <SliceZone slices={page.data.slices} components={components} />

  return <h1>{page}</h1>;
};

export default Home;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getAllByType('posts');

  return {
    props: {
      page,
    },
  };
}
