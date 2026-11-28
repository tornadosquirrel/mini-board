import { Router } from "express";

const router = Router();

const posts = [];

router.route("/")
  .get((req, res) => {
    res.json(posts);
  })

  .post((req, res) => {
    const { title, content } = req.body;
    const id = crypto.randomUUID();

    const newPost = { id, title, content };

    posts.push(newPost);
    res.status(201).json(newPost);
  });

router.route("/:id")
  .delete((req, res) => {
    const id = req.params.id;
    const index = posts.findIndex(post => post.id === id);

    if (index === -1) {
      res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
    }
    else {
      posts.splice(index, 1);
      res.sendStatus(204);
    }
  })

  .put((req, res) => {
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
  });

export default router;