import {
  Item,
  Status,
  Avatar,
  Name,
} from './FriendsList.styled';

export default function FriendListItem({ avatar, name, status }) {
  return (
    <Item>
      <Status $status={status} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}
