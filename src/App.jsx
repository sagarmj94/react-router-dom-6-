import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import PostList, { postLoader } from "./pages/PostList";
import PostComments from "./pages/PostComments";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostList />,
        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComments />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
