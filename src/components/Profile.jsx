import PropTypes from "prop-types";
const Profile = props => {
  return (
<div>
  <div>
    <img
      src={ props.image }
      alt="User avatar"
    />
    <p>{ props.name }</p>
    <p>{ props.tag }</p>
    <p>{ props.location }</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>{ props.stats.followers }</span>
    </li>
    <li>
      <span>Views</span>
      <span>{ props.stats.views }</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{ props.stats.likes }</span>
    </li>
  </ul>
</div>
  );
};

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
