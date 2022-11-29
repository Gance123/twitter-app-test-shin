import "./SideBar.scss";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { SideBarOption } from "../../molecules/sidebar/SideBarOption";
import { PrimaryButton } from "../../atoms/PrimaryButton";

export const SideBar = () => {
  const onClickTweet = () => {};
  return (
    <div className="sidebar">
      <div className="sidebar_twitterIcon">
        <TwitterIcon />
      </div>

      <SideBarOption icon={<HomeIcon />} title="ホーム" />
      <SideBarOption icon={<SearchIcon />} title="話題を検索" />
      <SideBarOption icon={<NotificationsNoneIcon />} title="通知" />
      <SideBarOption icon={<MailOutlineIcon />} title="メッセージ" />
      <SideBarOption icon={<BookmarkBorderIcon />} title="ブックマーク" />
      <SideBarOption icon={<ListAltIcon />} title="リスト" />
      <SideBarOption icon={<PermIdentityIcon />} title="プロフィール" />
      <SideBarOption icon={<MoreHorizIcon />} title="もっとみる" />

      <PrimaryButton classname={"sidebar_button"} onClick={onClickTweet}>
        ツイートする
      </PrimaryButton>
    </div>
  );
};
