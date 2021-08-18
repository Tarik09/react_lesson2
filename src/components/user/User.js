import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Posts from "../Posts/Posts";

export default function User({item: userItem}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(userItem.id).then(({data}) => setPosts([...data]));
    }, [userItem.id]);

  return (
    <div>
        <h2>{userItem.id} - {userItem.name}</h2>
        <h5><Posts items={posts}/></h5>
    </div>
  );
}