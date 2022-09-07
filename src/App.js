import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

//https://jsonplaceholder.typicode.com/posts

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  //Using promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setPosts(res.data))
  //     .catch((err) => setError(err.message));
  // }, []);

  //using async/await

  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      <h1>Axios Tutorial</h1>
      <div className="error">{error ? error : null}</div>
      {/* {error !== "" && <h2>{error}</h2>} */}
      <div className="grid">
        {posts.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id} className="card">
              <h1>{title.slice(0, 15).toUpperCase()}</h1>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
