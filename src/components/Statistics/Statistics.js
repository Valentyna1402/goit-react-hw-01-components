import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  StatisticsItemLabel,
  StatisticsItemText,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsContainer>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsListItem
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <StatisticsItemLabel>{label} </StatisticsItemLabel>
              <StatisticsItemText>{percentage} %</StatisticsItemText>
            </StatisticsListItem>
          );
        })}
      </StatisticsList>
    </StatisticsContainer>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
