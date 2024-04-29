import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { useState, useEffect } from "react";

import './App.css';
import Navbar from "./component/Navbar";
import Card from "./component/Card";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 20;

  useEffect(() => {
    loadMorePosts();
  }, []);

  const loadMorePosts = () => {
    axios.get(`http://api.sampleapis.com/codingresources/codingResources`)
      .then((res) => {
        const newPosts = res.data.slice((page - 1) * limit, page * limit);
        if (newPosts.length > 0) {
          setPosts([...posts, ...newPosts]);
          setPage(page + 1);
        } else {
          setHasMore(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  };

  return (
    <div className="App">
      <Navbar />
      <main className="card-grid">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMorePosts}
          hasMore={hasMore}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          {posts.map((post) => (
            <div key={post.id} className="card">
              <Card post={post} />
            </div>
          ))}
        </InfiniteScroll>
      </main>
    </div>
  );
}
