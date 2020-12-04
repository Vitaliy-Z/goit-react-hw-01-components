import PropTypes from "prop-types";
import "./friendList.css";

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map((friend) => (
        <li class="item" key={friend.id}>
          <span
            class="status"
            style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
          >
            {friend.isOnline}
          </span>
          <img
            class="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.prototype = {
  friends: PropTypes.object,
};
