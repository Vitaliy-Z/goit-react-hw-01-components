import Profile from "./Components/user/user";
import user from "./Components/user/user.json";
import Statistics from "./Components/statistics/statistics";
import statisticalData from "./Components/statistics/statistical-data.json";
import FriendList from "./Components/friendList/friendList";
import friends from "./Components/friendList/friends.json";
import TransactionHistory from "./Components/transactions/transactions";
import transactions from "./Components/transactions/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        key={statisticalData.id}
        title="Upload stats"
        stats={statisticalData}
      />
      <FriendList key={friends.id} friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
