import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  const statusText = friend.isOnline ? 'Online' : 'Offline';
  const statusColor = friend.isOnline ? css.green : css.red;

  return (
    <div>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      <p  className={statusColor}>{statusText}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
