import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export default function Friend({ avatar, name, isOnline }) {
  return (
  <div>
  <span
    className={[
      css.status,
      isOnline ? css.statusTrue : css.statusFalse,
     ].join(' ')}
  ></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
  </div>
);
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};