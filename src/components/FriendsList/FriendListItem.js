import {
  FriendsListItem,
  FriendsItemStatus,
  FriendsItemAvatar,
  FriendsItemName,
} from './FriendsList.styled';

export default function FriendListItem({ avatar, name, status }) {
  return (
    <FriendsListItem>
      <FriendsItemStatus $status={status} />
      <FriendsItemAvatar src={avatar} alt="User avatar" width="48" />
      <FriendsItemName>{name}</FriendsItemName>
    </FriendsListItem>
  );
}
