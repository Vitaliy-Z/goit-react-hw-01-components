import PropTypes from "prop-types";
import Friend from "./friend";
import "./friendList.css";

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

FriendList.prototype = {
  friends: PropTypes.object.isRequired,
};
