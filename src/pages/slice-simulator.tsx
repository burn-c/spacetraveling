/* eslint-disable import/no-unresolved */
import { SliceSimulator } from '@prismicio/slice-simulator-react';
import { SliceZone } from '@prismicio/react';

// eslint-disable-next-line import/extensions
import { components } from '../slices';
import state from '../.slicemachine/libraries-state.json';

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={({ slices }) => (
        <SliceZone slices={slices} components={components} />
      )}
      state={state}
    />
  );
};

export default SliceSimulatorPage;

// Only include this page in development
export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true };
  }
  return { props: {} };
};
