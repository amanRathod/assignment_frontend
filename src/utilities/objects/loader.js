import loaderGif from './giphy.gif';

const loading = () => <p className="text-9xl text-white">Loading</p>;

const renderLoader = () => (
  <div className="loader flex justify-center items-center h-screen bg-darkMode-base">
    <img src={loaderGif} alt={loading} />
  </div>
);

export default renderLoader;
