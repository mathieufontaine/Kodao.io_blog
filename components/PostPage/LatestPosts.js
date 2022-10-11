import Row from "./Row";

const LatestPosts = ({ posts }) => {
  return (
    <section className="container p-6 md:p-10 xl:p-15">
      <h3>Latest Articles</h3>
      <div className="mt-2 mx-auto w-full">
        {posts?.map((post) => (
          <div key={post._id}>
            <Row post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
