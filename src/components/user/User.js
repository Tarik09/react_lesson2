import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Posts from "../Posts/Posts";
import Comments from "../Comments/Comments";
import {getComments} from "../../services/comment.service";

export default function User({item: userItem}) {

    let [posts, setPosts] = useState([]);
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getPosts(userItem.id).then(({data}) => setPosts([...data]));
    }, [userItem.id]);

    useEffect(() => {
        getComments(userItem.id).then(({data}) => setComments([...data]));
    },[userItem.id]);

  return (
    <div>
        <h2>{userItem.id} - {userItem.name}</h2>
        <h5><Posts items={posts}/></h5>
        <Comments items={comments}/>
    </div>
  );
}