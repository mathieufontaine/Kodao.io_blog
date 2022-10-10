const Comments = ({ comments = [] }) => {
  return (
    <div className="container">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment._id}>
          <span className="font-bold mr-3">
            {new Date(comment._createdAt).toLocaleDateString()}
          </span>
          <div className="mb-5 flex">
            <p>
              <span className="text-accent font-bold mr-3">
                {comment.name}:
              </span>
              {comment.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
