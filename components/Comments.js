const Comments = ({ comments }) => {
  return (
    <div className="">
      <h3>Commentaires</h3>
      {comments.map((comment) => (
        <div>
          <span className="font-bold mr-3">
            {new Date(comment._createdAt).toLocaleDateString()}
          </span>
          <div className="mb-5 flex" key={comment._id}>
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
