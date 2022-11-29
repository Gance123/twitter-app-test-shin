import { Avatar, Button } from "@mui/material";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { forwardRef, LegacyRef } from "react";
import { auth, db } from "../../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

type Props = {
  dispalayName: string;
  username: string;
  verified: boolean;
  text: string;
  abatar: string;
  image: string;
  docID: string;
  authorID: string;
};

export const Post = forwardRef(
  (props: Props, ref: LegacyRef<HTMLDivElement>) => {
    const { dispalayName, username, verified, text, abatar, image, docID, authorID } =
      props;

    const onClickDeletePost = async (id:string) => {
      await deleteDoc(doc(db, "posts", id));
      window.location.href="/home"
    };

    console.log(docID)

    return (
      <div ref={ref}>
        <div className="post">
          <div className="post_avatar">
            <Avatar src={abatar} />
            {authorID === auth.currentUser?.uid && (
              <Button className="post_deletebutton" onClick={()=>onClickDeletePost(docID)}>
                削除
              </Button>
            )}
          </div>
          <div className="post_body">
            <div className="post_header">
              <div className="post_headerText">
                <h3>
                  {dispalayName}
                  <span className="post_headerSpecial">
                    {verified && <VerifiedUser className="post_badge" />}
                    <span> @{username}</span>
                  </span>
                </h3>
              </div>
              <div className="post_headerDescription">
                <p>{text}</p>
              </div>
            </div>
            <img src={image} />
            <div className="post_footer">
              <ChatBubbleOutline sx={{ fontSize: 20 }} />
              <Repeat sx={{ fontSize: 20 }} />
              <FavoriteBorder sx={{ fontSize: 20 }} />
              <PublishOutlined sx={{ fontSize: 20 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
