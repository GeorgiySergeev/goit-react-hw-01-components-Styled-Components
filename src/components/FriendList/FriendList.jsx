import PropTypes from 'prop-types';
import { FriendListStyle, FriendListItemLi } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <FriendListStyle>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItemLi key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendListItemLi>
      ))}
    </FriendListStyle>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      percentage: PropTypes.number,
      isOnline: PropTypes.bool,
    })
  ),
};
