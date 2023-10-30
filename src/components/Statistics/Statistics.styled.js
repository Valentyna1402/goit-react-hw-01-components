import styled from 'styled-components';

const Container = styled.section`
  max-width: 516px;
  margin: 0 auto;
  border: 1px solid #cacaca;
  border-radius: 5px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 12px;
`;

const ItemLabel = styled.span`
  color: #fff;
`;

const ItemText = styled.span`
  color: #fff;
  font-size: 22px;
`;

export {
  Container,
  Title,
  List,
  ListItem,
  ItemLabel,
  ItemText,
};
