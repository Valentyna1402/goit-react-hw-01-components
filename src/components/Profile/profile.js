import {
  ProfileContainer,
  Description,
  ProfileImg,
  ProfileName,
  ProfileText,
  StatsList,
  StatsItem,
  StatsText,
  StatsTextAccent,
} from './Profile.styled';

export default function Profile({ avatar, userName, tag, location, stats }) {
  return (
    <ProfileContainer>
      <Description>
        <ProfileImg src={avatar} alt="User avatar" width="240px" />
        <ProfileName>{userName}</ProfileName>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsTextAccent>Followers: </StatsTextAccent>
          <StatsText>{stats.followers}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsTextAccent>Views: </StatsTextAccent>
          <StatsText>{stats.views}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsTextAccent>Likes: </StatsTextAccent>
          <StatsText>{stats.likes}</StatsText>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
}
