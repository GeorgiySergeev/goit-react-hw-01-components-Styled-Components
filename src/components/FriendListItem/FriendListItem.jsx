import PropTypes from 'prop-types';

import {
  FriendImg,
  FriendName,
  Status,
  StatusIcon,
} from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  const backgroundColor = isOnline ? 'green' : 'red';

  return (
    <>
      <FriendImg src={avatar} alt="User avatar" />
      <Status>
        <StatusIcon style={{ backgroundColor }}>{isOnline}</StatusIcon>
        <FriendName>{name}</FriendName>
      </Status>
    </>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
