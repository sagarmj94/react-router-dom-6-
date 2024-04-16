import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        // height: 150,
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h2 className="text-wrap">{post.title}</h2>
      <p className="text-wrap">{post.body}</p>

      <Link to={`/posts/${post.id}`}>View Comments</Link>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
