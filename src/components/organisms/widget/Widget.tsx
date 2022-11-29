import "./Widget.scss";

import { Search } from "@mui/icons-material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

export const Widget = () => {
  return (
    <div className="widget">
      <div className="widget_input">
        <Search className="widget_searchIcon" />
        <input placeholder="キーワードを検索" type="text" />
      </div>

      <div className="widget_container">
        {/* ライブラリを追加 */}
        <div className="widget_tweet">
          <h2>いまどうしてる？</h2>
          <TwitterTweetEmbed tweetId={"1594960933486759936"} />
        </div>

        <div className="widget_timeline">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Shin_Engineer"
            options={{ height: 400 }}
          />
        </div>

        <div className="widget_button">
          <TwitterShareButton
            url={"https://twitter.com/Shin_Engineer"}
            options={{ text: "#reactjs is awesome", via: "Shin_Engineer" }}
          />
        </div>
      </div>
    </div>
  );
};
