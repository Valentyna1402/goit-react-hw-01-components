import styled from 'styled-components';

const StatisticsContainer = styled.section`
  max-width: 516px;
  margin: 0 auto;
  border: 1px solid #cacaca;
  border-radius: 5px;
  margin-bottom: 40px;
`;

const StatisticsTitle = styled.h2`
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

const StatisticsList = styled.ul`
  display: flex;
`;

const StatisticsListItem = styled.li`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 12px;
`;

const StatisticsItemLabel = styled.span`
  color: #fff;
`;

const StatisticsItemText = styled.span`
  color: #fff;
  font-size: 22px;
`;

export {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  StatisticsItemLabel,
  StatisticsItemText,
};
