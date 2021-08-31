import './Users.css'
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.fetch.service";
import User from "../user/User";
import {getPostsUsers} from "../../services/get.posts.users";

export default function Users() {
  let [users, setUsers] = useState([]);
  let [posts, setPosts] = useState(null)

  useEffect(() => {
    getUsers().then(value => setUsers([...value]))
  }, []);

const choseUser = (u) => {
        getPostsUsers(u.id).then(value => setPosts([...value]));
}

  return (
    <div className={'wrap'}>
      <div className={'users-box'}>
        {
          users.map(value =>
              <User
                  key={value.id}
                  item={value}
                  choseUser={choseUser}
              />
          )
        }


      </div>
        {
           posts && <div className={'chosen-one'}>{JSON.stringify(posts)}</div>
        }
    </div>
  );
}
