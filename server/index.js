import express from "express";
import cors from "cors";

const app = express();

const PORT = 3000;

const posts = [];

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const id = crypto.randomUUID();

  const newPost = { id, title, content };

  posts.push(newPost);
  res.status(201).json(newPost);
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const index = posts.findIndex(post => post.id === id);

  if (index === -1) {
    res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
  }
  else {
    posts.splice(index, 1);
    res.sendStatus(204);
  }
});

app.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  const index = posts.findIndex(post => post.id === id);

  if (index === -1) {
    res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
  }
  else {
    posts.splice(index, 1, { ...posts[index], title, content });
    res.sendStatus(204);
  }
})

app.listen(PORT, () => {
  console.log("🚀 http://localhost:3000/");
});