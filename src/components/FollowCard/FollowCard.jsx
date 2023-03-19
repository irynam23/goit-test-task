import {
  StyledDiv,
  StyledLogo,
  StyledPic,
  StyledSeparator,
  StyledTweets,
  StyledFollowers,
  StyledBtn,
  StyledEllipse,
  StyledAvatar,
} from "./FollowCard.styled";
import { Logo } from "../../assets/icons";
import background from "../../assets/images/picture.png";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const FollowCard = ({ id, tweets, followers, avatar }) => {
  const [followingUsers, setFollowingUsers] = useLocalStorage("following", []);

  const handleClick = () => {
    setFollowingUsers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((value) => value !== id);
      }
      return [...prev, id];
    });
  };

  const isFollowing = followingUsers.includes(id);

  const followersCount = isFollowing ? followers + 1 : followers;

  return (
    <StyledDiv>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledPic>
        <img src={background} alt="background" width="308" height="168" />
      </StyledPic>
      <StyledSeparator>
        <StyledEllipse>
          <StyledAvatar>
            <img src={avatar} alt="avatar" width="70" />
          </StyledAvatar>
        </StyledEllipse>
      </StyledSeparator>

      <StyledTweets> {tweets} tweets</StyledTweets>
      <StyledFollowers>
        {followersCount.toLocaleString()} Followers
      </StyledFollowers>
      <StyledBtn isFollowing={isFollowing} type="button" onClick={handleClick}>
        {isFollowing ? "Following" : "Follow"}
      </StyledBtn>
    </StyledDiv>
  );
};
