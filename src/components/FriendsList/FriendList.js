import FriendListItem from './FriendListItem';
import { FriendsList } from './FriendsList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            status={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </FriendsList>
  );
}
