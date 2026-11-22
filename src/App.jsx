import "./App.css";
import { useState, useEffect } from "react";
import PostCard from "./components/PostCard.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function postpost() {
    const newPost = {
      title: (title.trim() === "" ? "제목 없음" : title),
      content: (content.trim() === "" ? "꾸에엑" : content)
    };

    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    });

    const data = await response.json()

    setPosts(prev => [...prev, data]);
    setTitle("");
    setContent("")
  }

  function editPost(id, prevTitle, prevContent) {
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? {
            ...post,
            title: title.trim() === "" ? prevTitle : title,
            content: content.trim() === "" ? prevContent : content
          }
          : post
      )
    );
    setTitle("");
    setContent("")
  }

  function deletePost(id) {
    setPosts(prev =>
      prev.filter(post => post.id !== id)
    );
  }

  async function loadPosts() {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();

    setPosts(data);
  }

  useEffect(() => {
    loadPosts();
  }, [])

  return (
    <main>
      <h1>나의 미니 게시판</h1>

      {posts.length === 0 ? (
        <h2>아직 게시글이 없습니다.</h2>
      ) : (
        <h2>게시글이 {posts.length}개 있습니다.</h2>
      )}

      {posts.length >= 5 && <p>게시글이 너무 많습니다!</p>}

      {posts.map(({ id, title, content }) => (
        <PostCard
          key={id}
          id={id}
          title={title}
          content={content}
          onDelete={deletePost}
          onEdit={editPost}
        />
      ))}

      <input
        type="text"
        name="title"
        id="title-input"
        placeholder="제목"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        id="content-input"
        placeholder="내용"
        value={content}
        onChange={e => setContent(e.target.value)}>

      </textarea>

      <button onClick={postpost}>게시글 추가</button>
    </main>
  );
}

export default App;