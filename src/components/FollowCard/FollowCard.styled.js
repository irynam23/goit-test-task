import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  height: 460px;
  width: 380px;
  padding: 28px 0 36px 0;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const StyledLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const StyledPic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSeparator = styled.div`
  position: relative;
  width: 380px;
  height: 8px;
  margin-top: 18px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const StyledEllipse = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 0;
  left: 50%;
  transform: translate(-50%, -45%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const StyledAvatar = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
`;

export const StyledBack = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 9.48px;
  top: 9.42px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 50%;
`;

export const StyledTweets = styled.p`
  text-align: center;
  margin-top: 62px;
  font-size: 20px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const StyledFollowers = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 20px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const StyledBtn = styled.button`
  display: block;
  margin: 26px auto 0 auto;
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  background: ${({ isFollowing }) => (isFollowing ? "#5CD3A8" : "#ebd8ff")};
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-transform: uppercase;
  color: #373737;
`;
