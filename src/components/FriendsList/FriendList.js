import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
      <ul className="friend-list">
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
      </ul>
  );
}

