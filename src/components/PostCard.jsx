function PostCard({ id, title, content, onDelete, onRename }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>id : {id}</p>
      <button onClick={() => onDelete(id)}>삭제</button>
      <button onClick={() => onRename(id)}>제목 변경</button>
    </article>
  );
}

export default PostCard;