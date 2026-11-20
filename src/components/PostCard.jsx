function PostCard({ id, title, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>id : {id}</p>
      <button>삭제</button>
    </article>
  );
}

export default PostCard;