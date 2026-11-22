function PostCard({ id, title, content, onDelete, onEdit }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>id : {id}</p>
      <button onClick={() => onDelete(id)}>삭제</button>
      <button onClick={() => onEdit(id, title, content)}>글 수정</button>
    </article>
  );
}

export default PostCard;