import Section from './Section/Section';

import Profile from './Profile/Profile';
import user from 'data/user.json';

import Statictic from './Statistic/Statistic';
import stats from 'data/statistics.json';

import FriendList from './FriendsList/FriendsList';
import friends from 'data/friends.json';

import Transaction from './Transaction/Transaction';
import transactions from 'data/transactions.json';


export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>

  <div>
  <Section>
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  </Section>

  <Section>
  <Statictic title="Upload stats" stats={stats} />
  </Section>

  <Section>
  <FriendList friends={friends} />
  </Section>

  <Section>
  <Transaction items={transactions} />
  </Section>
  </div>
);
};
