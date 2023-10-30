import {
  Container,
  Description,
  Img,
  Name,
  Text,
  List,
  StatsItem,
  StatsText,
  StatsTextAccent,
} from './Profile.styled';

export default function Profile({ avatar, userName, tag, location, stats }) {
  return (
    <Container>
      <Description>
        <Img src={avatar} alt="User avatar" width="240px" />
        <Name>{userName}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <List>
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
      </List>
    </Container>
  );
}
