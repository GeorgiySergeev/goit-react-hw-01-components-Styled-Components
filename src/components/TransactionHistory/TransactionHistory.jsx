import PropTypes from 'prop-types';
import css from './transaction-history.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={`${css.transactionHistory}`}>
      <thead>
        <tr className={`${css.tableHead}`}>
          <th className={`${css.tableTitle}`}>Type</th>
          <th className={`${css.tableTitle}`}>Amount</th>
          <th className={`${css.tableTitle}`}>Currency</th>
        </tr>
      </thead>

      <tbody className={`${css.tableBody}`}>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
