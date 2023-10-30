import {
  Table,
  TableHead,
  HeaderCell,
  DataCell,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <DataCell>{type}</DataCell>
              <DataCell>{amount}</DataCell>
              <DataCell>{currency}</DataCell>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
