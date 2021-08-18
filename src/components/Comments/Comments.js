import Comment from "../Comment/Comment";

export default function Comments({items}) {
  return (
    <div>
      {
        items.map(value=> (
            <Comment
                item={value}
                key={value.id}
            />
          )
        )
      }
    </div>
  );
}