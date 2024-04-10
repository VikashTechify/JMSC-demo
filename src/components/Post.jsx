import PropTypes from "prop-types";

const Post = ({ posts }) => {
  return (
    <div>
      {!posts.length ? (
        <h4>No Post Found</h4>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

Post.propTypes = {
  posts: PropTypes.array,
};

export default Post;
