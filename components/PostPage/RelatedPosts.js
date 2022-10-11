import Card from "../Home/Card";

const RelatedPosts = ({ posts, category }) => {
  return (
    <section className="container p-6 md:p-10 xl:p-15">
      <h3>
        Related Articles: <span className="black">{`"${category}"`}</span>
      </h3>
      <div
        className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
        mx-auto w-full"
      >
        {posts?.map((post) => (
          <div key={post._id}>
            <Card post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
