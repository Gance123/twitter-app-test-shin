import "./TimeLine.scss";
import { memo, useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { Post } from "../../molecules/timeline/Post";
import { TweetBox } from "../../molecules/timeline/TweetBox";
import { Button } from "@mui/material";
// import FlipMove from "react-flip-move";

export const TimeLine = () => {
  const [postLists, setPostLists] = useState<Array<any>>([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(q).then((qerySnapshot) => {
    //   setPostLists(qerySnapshot.docs.map((doc) => doc.data()));
    // });
    /* リアルタイムでデータ取得*/
    onSnapshot(q, (querySnapshot) => {
      // console.log(
      //   querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      // );
      setPostLists(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      // postLists.map((post) => {
      //   console.log(post.id);
      // });
    });
  }, []);

  return (
    <>
      <div className="timeline">
        {/* ヘッダー */}
        <div className="timeline_header">
          <h2>ホーム</h2>
        </div>
        {/* ツイートボックス */}
        <TweetBox />
        {/* ポスト */}
        {/* <FlipMove> */}
        {postLists.map((post) => (
          <>
            <Post
              key={post.id}
              dispalayName={post.dispalayName}
              username={post.author.username}
              verified={post.verified}
              text={post.text}
              abatar={post.abatar}
              image={post.image}
              docID={post.id}
              authorID={post.author.id}
            />
            
          </>
        ))}
        {/* </FlipMove> */}
      </div>
    </>
  );
};
