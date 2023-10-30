import styled from 'styled-components';

const List = styled.ul`
  max-width: 260px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid rgba(152, 152, 152, 0.441);
  box-shadow: 8px 8px 8px 0px rgba(102, 102, 102, 0.57);
`;

const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.$status ? 'green' : 'red')};
`;

const Avatar = styled.img`
  max-width: 100%;
`;

const Name = styled.p`
  font-weight: 500;
`;

export {
  List,
  Item,
  Status,
  Avatar,
  Name,
};
