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
        <ProfileName className="name">{userName}</ProfileName>
        <ProfileText className="tag">@{tag}</ProfileText>
        <ProfileText className="location">{location}</ProfileText>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsTextAccent className="label">Followers: </StatsTextAccent>
          <StatsText className="quantity">{stats.followers}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsTextAccent className="label">Views: </StatsTextAccent>
          <StatsText className="quantity">{stats.views}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsTextAccent className="label">Likes: </StatsTextAccent>
          <StatsText className="quantity">{stats.likes}</StatsText>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
}
