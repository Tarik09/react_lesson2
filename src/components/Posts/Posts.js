import Post from "../Post/Post";

export default function Posts({items}) {
  return (
    <div>
      {
        items.map(value=> (
            <Post
              item={value}
              key={value.id}
            />
          )
        )
      }
    </div>
  );
}