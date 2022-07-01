const Comments = ({ comments }) => {
  return (
    <div className="comment_wrapper">
      <h3>Commentaires</h3>
      {comments.map((comment) => (
        <div className="comment" key={comment._id}>
          <p className="comment_date">
            {new Date(comment._createdAt).toLocaleDateString()}
          </p>
          <p>
            <span className="comment_name">{comment.name}:</span>
            {comment.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
