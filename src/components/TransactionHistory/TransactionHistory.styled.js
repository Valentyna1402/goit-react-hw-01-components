import styled from 'styled-components';

const TransactionsTable = styled.table`
  width: 100%;
  max-width: 516px;
  margin: 0 auto;
  border: 1px solid rgb(102, 102, 102);
`;

const TableHead = styled.thead`
  width: 100%;
  background-color: hsl(180, 44%, 71%);
`;

const HeaderCell = styled.th`
  border: 1px solid rgb(102, 102, 102);
  padding: 8px;
`;

const DataCell = styled.td`
  border: 1px solid rgb(102, 102, 102);
  padding: 8px;
  text-align: center;
  background-color: hsla(180, 28%, 76%, 0.285);
  color: rgb(102, 102, 102);
`;

export { TransactionsTable, TableHead, HeaderCell, DataCell };
