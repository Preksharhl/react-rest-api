import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  // GET API (Fetch posts)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // POST API (Add new post)
  const addPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: "Sample Body",
        userId: 1,
      })
      .then((res) => {
        alert("Post Added!");
        setPosts([res.data, ...posts]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>REST API Demo (Axios)</h1>

      <h3>Add a New Post</h3>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: 8, marginRight: 10 }}
      />
      <button onClick={addPost}>Add Post</button>

      <hr />

      <h3>Fetched Posts</h3>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            padding: 10,
            border: "1px solid #ccc",
            marginBottom: 10,
            borderRadius: 5,
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
