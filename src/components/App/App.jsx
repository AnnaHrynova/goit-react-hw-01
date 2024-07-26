import userData from "../Profile/userData.json";
import Profile from "../Profile/Profile";
import friends from "../FriendList/friends.json";
import FriendList from "../FriendList/FriendList";
import transactions from "../TransactionHistory/transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import "../../../index.css"

export default function App() {
    return (
        <div>
          <Profile data ={userData} />
          <FriendList friends={friends} />
          <TransactionHistory transactions={transactions}/>
        </div>
      );
}

