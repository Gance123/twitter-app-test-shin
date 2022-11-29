import { ChangeEvent, useState } from "react";
import { Avatar, Button } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

export const TweetBox = () => {
  const [tweetText, setTweetText] = useState<string>("");
  const [tweetImage, setTweetImage] = useState<string>("");

  const onClickTweet = (e: any) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      dispalayName: "",
      username: "",
      verified: "",
      text: tweetText,
      abatar: "",
      image: tweetImage,
      timestamp: serverTimestamp()
    });
    setTweetText("");
    setTweetImage("");
  };
  return (
    <div className="tweetbox">
      <form className="tweetbox_form">
        <div className="tweetbox_input">
          <Avatar />
          <input
            value={tweetText}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetText(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetbox_imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetbox_button"
          type="submit"
          onClick={onClickTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
};
