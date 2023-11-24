import PropTypes from 'prop-types';

import {
  Container,
  UserName,
  Discription,
  UserTag,
  UserImg,
  UserLocation,
  UserStats,
  UserStatsLabel,
  UserStatsQty,
} from './Profile.styled';

export const Profile = ({
  userAvatar,
  userName,
  userTag,
  userLocation,
  userFollowers,
  userViews,
  userLikes,
}) => {
  return (
    <Container>
      <Discription>
        <UserImg src={userAvatar} alt="User avatar" />
        <UserName>{userName}</UserName>
        <UserTag>{userTag}</UserTag>
        <UserLocation>{userLocation}</UserLocation>
      </Discription>

      <UserStats>
        <li>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsQty>{userFollowers}</UserStatsQty>
        </li>
        <li>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsQty>{userViews}</UserStatsQty>
        </li>
        <li>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsQty>{userLikes}</UserStatsQty>
        </li>
      </UserStats>
    </Container>
  );
};

Profile.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userFollowers: PropTypes.number.isRequired,
  userViews: PropTypes.number.isRequired,
  userLikes: PropTypes.number.isRequired,
};
