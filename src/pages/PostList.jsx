import axios from "axios";
import PostCard from "../components/PostCard";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const { data: posts } = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // https://jsonplaceholder.typicode.com/posts
  // const fetchPost = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=50"
  //     );
  //     setPosts(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     setError(error.message);
  //     console.log("🚀 ~ fetchPost ~ error:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchPost();
  // }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export async function postLoader() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=50"
  );
  return response;
}

export default PostList;
