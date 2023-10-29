import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import Profile from './Profile/profile.js';
import Statistics from './Statistics/Statistics.js';
import FriendList from './FriendsList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Profile
        avatar={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      ;
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
