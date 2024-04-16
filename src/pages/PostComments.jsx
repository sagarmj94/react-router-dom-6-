import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostComments = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { postId } = useParams();
  const navigation = useNavigate();

  const fetchData = async () => {
    setLoading(true);

    try {
      const [postResponse, commentsResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        ),
      ]);
      setPost(postResponse.data);
      setComments(commentsResponse.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
      <button onClick={() => navigation(-1)}>Go Back</button>
    </div>
  );
};

export default PostComments;
