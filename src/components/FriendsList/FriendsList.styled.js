import styled from 'styled-components';

const FriendsList = styled.ul`
  max-width: 260px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid rgba(152, 152, 152, 0.441);
  box-shadow: 8px 8px 8px 0px rgba(102, 102, 102, 0.57);
`;

const FriendsItemStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.$status ? 'green' : 'red')};
`;

const FriendsItemAvatar = styled.img`
  max-width: 100%;
`;

const FriendsItemName = styled.p`
  font-weight: 500;
`;

export {
  FriendsList,
  FriendsListItem,
  FriendsItemStatus,
  FriendsItemAvatar,
  FriendsItemName,
};
