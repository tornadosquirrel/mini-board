import "./App.css";
import { useState } from "react";
import PostCard from "./components/PostCard.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [nextId, setNextId] = useState(0);

  function rename(id) {
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? { ...post, title: "수정 완료!" }
          : post
      )
    );
  }

  function rename(id) {
    setPosts(posts.map(post => post.id === id ? { ...post, title: "수정 완료!" } : post));
  }

  return (
    <main>
      <h1>나의 미니 게시판</h1>
      {posts.map(({ id, title, content }) => (
        <PostCard key={id} id={id} title={title} content={content} onDelete={deletePost} onRename={rename} />
      ))}

      <button onClick={() => {
        const newPost = { id: nextId, title: "휙", content: "억" };
        setPosts(prev => [...prev, newPost]);
        setNextId(prev => prev + 1);
      }}>
        게시글 추가
      </button>

    </main>
  );
}

export default App;