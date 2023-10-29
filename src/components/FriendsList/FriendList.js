export default function FriendList({ friends }) {
  return (
    <section className="friends">
      <h2 className="title">Friends List</h2>
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
    </section>
  );
}

function FriendListItem({ avatar, name, status }) {
  return (
    <li className="item">
      <span className="status">{status}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
