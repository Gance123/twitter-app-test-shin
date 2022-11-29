import "./TimeLine.scss";
import { memo, useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { db } from "../../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { Post } from "../../molecules/timeline/Post";
import { TweetBox } from "../../molecules/timeline/TweetBox";

export const TimeLine = (() => {
  const [postLists, setPostLists] = useState<Array<any>>([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(q).then((qerySnapshot) => {
    //   setPostLists(qerySnapshot.docs.map((doc) => doc.data()));
    // });
    /* リアルタイムでデータ取得*/
    onSnapshot(q, (querySnapshot) => {
      console.log(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setPostLists(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
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
          {postLists.map((postList) => (
            <Post
              key={postList.id}
              dispalayName={postList.dispalayName}
              username={postList.username}
              verified={postList.verified}
              text={postList.text}
              abatar={postList.abatar}
              image={postList.image}
              postID={postList.id}
            />
          ))}
        {/* </FlipMove> */}
      </div>
    </>
  );
});
