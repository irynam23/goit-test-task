import { FollowCard } from "../FollowCard/FollowCard";
import { CardWrapper } from "./FollowList.styled";
import usersData from "../../users.json";

export const FollowList = () => {
  return (
    <CardWrapper>
      {usersData.map(({ id, tweets, followers, avatar }) => (
        <FollowCard
          key={id}
          id={id}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
        />
      ))}
    </CardWrapper>
  );
};
