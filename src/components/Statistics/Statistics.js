import {
  Container,
  Title,
  List,
  ListItem,
  ItemLabel,
  ItemText,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
     {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <ItemLabel>{label} </ItemLabel>
              <ItemText>{percentage} %</ItemText>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
