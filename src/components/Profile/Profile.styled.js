import styled from 'styled-components';

const Container = styled.div`
  max-width: 260px;
  padding: 8px;
  margin: 0 auto;
  border: 1px solid #cacaca;
  border-radius: 5px;
  margin-bottom: 40px;
`;

const Description = styled.div`
  padding: 0px;
`;

const Img = styled.img`
  margin: 0 auto;
  border-radius: 50%;
`;

const Name = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  font-size: 22px;
  font-weight: 600;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  color: rgb(102, 102, 102);
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 12px;
  padding: 8px;
  background-color: #cacaca;
  border-radius: 5px;
`;

const StatsItem = styled.li`
display: flex;
justify-content: center;
flex-wrap: wrap;
}
`;

const StatsText = styled.span`
  font-weight: 600;
`;

const StatsTextAccent = styled.span`
  margin-bottom: 4px;
  color: rgb(102, 102, 102);
`;

export {
  Container,
  Description,
  Img,
  Name,
  Text,
  List,
  StatsItem,
  StatsText,
  StatsTextAccent,
};
